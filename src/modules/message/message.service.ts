import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dtos/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private _messageModel: Model<MessageDocument>,
  ) {}

  async findMessagesByChatId(chatId: string): Promise<Message[]> {
    if (!chatId) {
      throw new Error('Param (chatId) is required!');
    }

    const messages = await this._messageModel
      .find({ chatId })
      .sort({ createdAt: -1 });

    if (!messages || messages.length === 0) {
      throw new Error(`No messages found for chat with id ${chatId}`);
    }

    return messages;
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const newMessage = new this._messageModel({
      _id: randomUUID(),
      ...createMessageDto,
    });

    try {
      await newMessage.save();
    } catch (error: any) {
      throw error;
    }
    return newMessage;
  }
}
