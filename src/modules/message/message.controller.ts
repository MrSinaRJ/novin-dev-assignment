import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { QueryMessageDto } from './dtos/query-message.dto';
import { MessageService } from './message.service';

@Controller({ path: 'message', version: '1' })
export class MessageController {
  constructor(private readonly _messageService: MessageService) {}

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this._messageService.createMessage(createMessageDto);
  }

  @Get(':chatId')
  async findMessagesByChatId(@Body() queryMessageDto: QueryMessageDto) {
    return this._messageService.findMessagesByChatId(queryMessageDto);
  }
}
