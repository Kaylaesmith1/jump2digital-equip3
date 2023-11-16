import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Museum } from './schemas/museum.schema';
import { Model } from 'mongoose';

@Injectable()
export class MuseumsService {
  constructor(@InjectModel(Museum.name) private museumModel: Model<Museum>) {}

  async findAll() {
    try {
      const museums = await this.museumModel.findOneAndUpdate();
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
