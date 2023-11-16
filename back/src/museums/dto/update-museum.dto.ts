import { PartialType } from '@nestjs/mapped-types';
import { CreateMuseumDto } from './create-museum.dto';

export class UpdateMuseumDto extends PartialType(CreateMuseumDto) {}
