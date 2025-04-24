import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { CreateChatDto } from './dtos/create-chat.dto';
import { JoinChatDto } from './dtos/join-chat.dto';
import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private _chatModel: Model<ChatDocument>,
  ) {}

  async createChat(chatDto: CreateChatDto): Promise<Chat> {
    const newChat = new this._chatModel({ _id: randomUUID(), ...chatDto });

    try {
      await newChat.save();
    } catch (error: any) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Chat with name ${chatDto.name} already exists!`,
        );
      }
      throw error;
    }
    return newChat;
  }

  async joinChat(joinChatDto: JoinChatDto): Promise<Chat> {
    const { userId, chatId } = joinChatDto;
    const chat = await this._chatModel.findById(chatId);

    if (!chat) throw new NotFoundException(`Chat with id ${chatId} not found!`);

    if (!chat.members.includes(userId)) {
      chat.members.push(userId);
      await chat.save();
    }

    return chat;
  }

  async findUserChats(userId: string): Promise<Chat[]> {
    if (!userId) {
      throw new BadRequestException('Param (userId) is required!');
    }

    const chats = await this._chatModel.find({ members: userId });

    if (!chats || chats.length === 0) {
      throw new NotFoundException(`No chats found for user with id ${userId}`);
    }

    return chats;
  }

  async findChatById(id: string): Promise<Chat> {
    if (!id) {
      throw new BadRequestException('Param (id) is required!');
    }
    const chat = await this._chatModel.findById(id);

    if (!chat) throw new NotFoundException(`Chat with id ${id} not found!`);

    return chat;
  }
}
