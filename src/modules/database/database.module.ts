import { Chat, ChatSchema } from '@chat/schemas/chat.schema';
import { Message, MessageSchema } from '@message/schemas/message.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
