import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/create-chat.dto';
import { JoinChatDto } from './dtos/join-chat.dto';
import { Chat } from './schemas/chat.schema';

@Controller({ path: 'chat', version: '1' })
export class ChatController {
  constructor(private readonly _chatService: ChatService) {}

  @ApiOkResponse({
    description: 'Create a new chat',
    type: Chat,
  })
  @Post()
  createChat(@Body() chatDto: CreateChatDto) {
    return this._chatService.createChat(chatDto);
  }

  @ApiOkResponse({
    description: 'Join a chat',
    type: Chat,
  })
  @Post('join')
  joinChat(@Body() joinChatDto: JoinChatDto) {
    return this._chatService.joinChat(joinChatDto);
  }

  @ApiOkResponse({
    description: 'Get all chats for a user',
    type: [Chat],
  })
  @Get('user/:userId')
  findUserChats(@Param('userId') userId: string) {
    return this._chatService.findUserChats(userId);
  }

  @ApiOkResponse({
    description: 'Get chat by ID',
    type: Chat,
  })
  @Get(':id')
  findChatById(@Param('id') id: string) {
    return this._chatService.findChatById(id);
  }
}
