import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @ApiProperty({
    description: 'Name of the chat',
    example: 'General Chat',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Members of the chat (UUID v4)',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
    required: false,
    type: String,
    isArray: true,
  })
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsOptional()
  members?: string[];
}
