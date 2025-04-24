// chat-chat.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({
  timestamps: true,
})
export class Chat {
  @Prop()
  _id!: string;

  @Prop({ required: true, unique: true, index: true })
  name!: string;

  @Prop({ type: [String], default: [] })
  members!: string[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
