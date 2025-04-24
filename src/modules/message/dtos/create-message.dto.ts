import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    description: 'The ID of the chat to which the message should be sent',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  chatId!: string;

  @ApiProperty({
    description: 'The ID of the sender of the message',
    example: '123e4567-e89b-12d3-a456-426614174001',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  sender!: string;

  @ApiProperty({
    description: 'The content of the message',
    example: 'Hello, how are you?',
    required: true,
    maxLength: 500,
    minLength: 1,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  @MinLength(1)
  @Transform(({ value }) => value.trim().replace(/\s+/g, ' '))
  content!: string;
}
