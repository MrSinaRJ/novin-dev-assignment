import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMessageDto {
  @IsUUID()
  @IsNotEmpty()
  chatId!: string;

  @IsUUID()
  @IsNotEmpty()
  sender!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  @MinLength(1)
  @Transform(({ value }) => value.trim().replace(/\s+/g, ' '))
  content!: string;
}
