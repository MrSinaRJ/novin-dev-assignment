import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class JoinChatDto {
  @ApiProperty({
    description: 'User ID (UUID v4)',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
    type: String,
  })
  @IsUUID(4)
  @IsNotEmpty()
  userId!: string;

  @ApiProperty({
    description: 'Chat ID (UUID v4)',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
    type: String,
  })
  @IsUUID(4)
  @IsNotEmpty()
  chatId!: string;
}
