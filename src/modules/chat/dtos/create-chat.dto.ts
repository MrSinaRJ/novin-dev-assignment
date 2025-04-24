import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsOptional()
  members?: string[];
}
