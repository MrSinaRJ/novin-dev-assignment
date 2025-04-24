import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
