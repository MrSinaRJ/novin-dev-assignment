import { PartialType } from '@nestjs/swagger';
import { CreateMessageDto } from './create-message.dto';

export class QueryMessageDto extends PartialType(CreateMessageDto) {}
