import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateMessageDto } from './dtos/create-message.dto';
import { QueryMessageDto } from './dtos/query-message.dto';
import { MessageService } from './message.service';
import { Message } from './schemas/message.schema';

@Controller({ path: 'message', version: '1' })
export class MessageController {
  constructor(private readonly _messageService: MessageService) {}

  @ApiOkResponse({
    description: 'Create a new message',
    type: Message,
  })
  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this._messageService.createMessage(createMessageDto);
  }

  @ApiOkResponse({
    description: 'Get messages by chat ID',
    type: [Message],
  })
  @Get(':chatId')
  async findMessagesByChatId(@Param('chatId') chatId: string) {
    return this._messageService.findMessagesByChatId(chatId);
  }
}
