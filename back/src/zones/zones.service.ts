import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { Model } from 'mongoose';
import { Zone } from './schemas/zone.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ZonesService {
  constructor(@InjectModel(Zone.name) private zoneModel: Model<Zone>) {}
  async create(createZoneDto: CreateZoneDto) {
    try {
      await this.zoneModel.create(createZoneDto);
    } catch (error) {
      console.log(error);
    }
    return 'This action adds a new zone';
  }

  async findAll() {
    try {
      const zones = await this.zoneModel.find();
      console.log('zones', zones);
      return zones;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} zone`;
  }
}
