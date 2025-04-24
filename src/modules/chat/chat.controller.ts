import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/create-chat.dto';
import { JoinChatDto } from './dtos/join-chat.dto';

@Controller({ path: 'chat', version: '1' })
export class ChatController {
  constructor(private readonly _chatService: ChatService) {}

  @Post()
  createChat(@Body() chatDto: CreateChatDto) {
    return this._chatService.createChat(chatDto);
  }

  @Post('join')
  joinChat(@Body() joinChatDto: JoinChatDto) {
    return this._chatService.joinChat(joinChatDto);
  }

  @Get('user/:userId')
  findUserChats(@Param('userId') userId: string) {
    return this._chatService.findUserChats(userId);
  }

  @Get(':id')
  findChatById(@Param('id') id: string) {
    return this._chatService.findChatById(id);
  }
}
