import { Injectable } from '@nestjs/common';
import { CreateMuseumDto } from './dto/create-museum.dto';
import { UpdateMuseumDto } from './dto/update-museum.dto';

@Injectable()
export class MuseumsService {
  create(createMuseumDto: CreateMuseumDto) {
    return 'This action adds a new museum';
  }

  findAll() {
    return `This action returns all museums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} museum`;
  }

  update(id: number, updateMuseumDto: UpdateMuseumDto) {
    return `This action updates a #${id} museum`;
  }

  remove(id: number) {
    return `This action removes a #${id} museum`;
  }
}
