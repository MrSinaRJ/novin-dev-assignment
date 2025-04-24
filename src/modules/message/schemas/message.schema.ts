import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({
  timestamps: true,
})
export class Message {
  @ApiProperty({
    description: 'Message ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    nullable: false,
  })
  @Prop()
  _id!: string;

  @ApiProperty({
    description: 'Chat ID to which the message belongs',
    example: '123e4567-e89b-12d3-a456-426614174000',
    nullable: false,
  })
  @Prop({ type: String, required: true, index: true })
  chatId!: string;

  @ApiProperty({
    description: 'Sender ID of the message',
    example: '123e4567-e89b-12d3-a456-426614174001',
    nullable: false,
  })
  @Prop({ type: String, required: true })
  sender!: string;

  @ApiProperty({
    description: 'Content of the message',
    example: 'Hello, how are you?',
    nullable: false,
    maxLength: 500,
    minLength: 1,
  })
  @Prop({ type: String, required: true, maxlength: 500, minlength: 1 })
  content!: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

MessageSchema.index({ chatId: 1, createdAt: -1 });
