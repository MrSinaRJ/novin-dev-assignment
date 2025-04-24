// chat-chat.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({
  timestamps: true,
})
export class Chat {
  @ApiProperty({
    description: 'Chat ID (UUID v4)',
    example: '123e4567-e89b-12d3-a456-426614174000',
    nullable: false,
  })
  @Prop()
  _id!: string;

  @ApiProperty({
    description: 'Name of the chat',
    example: 'General Chat',
    nullable: false,
    type: String,
  })
  @Prop({ required: true, unique: true, index: true })
  name!: string;

  @ApiProperty({
    description: 'Members of the chat (UUID v4)',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
    nullable: false,
    default: [],
    type: String,
    isArray: true,
  })
  @Prop({ type: [String], default: [] })
  members!: string[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
