import { Chat, ChatSchema } from '@chat/schemas/chat.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
