import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({
  timestamps: true,
})
export class Message {
  @Prop()
  _id!: string;

  @Prop({ type: String, required: true, index: true })
  chatId!: string;

  @Prop({ type: String, required: true })
  sender!: string;

  @Prop({ type: String, required: true })
  content!: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

MessageSchema.index({ chatId: 1, createdAt: -1 });
