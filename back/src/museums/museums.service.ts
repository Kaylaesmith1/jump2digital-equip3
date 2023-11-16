import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Museum } from './schemas/museum.schema';
import { Model } from 'mongoose';
import { CreateMuseumDto } from './dto/create-museum.dto';

@Injectable()
export class MuseumsService {
  constructor(@InjectModel(Museum.name) private museumModel: Model<Museum>) {}

  async create(createMuseumDto: CreateMuseumDto) {
    try {
      const museumsCreated = await this.museumModel.create(createMuseumDto, {
        new: true,
      });
      if (!museumsCreated)
        throw new HttpException(
          'Error cargando los museos',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      return 'Museos cargados correctamente';
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const museums = await this.museumModel.find();
      return museums;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} museum`;
  }

  remove(id: number) {
    return `This action removes a #${id} museum`;
  }
}
