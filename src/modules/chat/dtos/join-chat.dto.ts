import { IsNotEmpty, IsUUID } from 'class-validator';

export class JoinChatDto {
  @IsUUID(4)
  @IsNotEmpty()
  userId!: string;

  @IsUUID(4)
  @IsNotEmpty()
  chatId!: string;
}
