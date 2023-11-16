import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ZoneSchema, Zone } from './schemas/zone.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Zone.name,
        schema: ZoneSchema,
      },
    ]),
  ],
  controllers: [ZonesController],
  providers: [ZonesService],
})
export class ZonesModule {}
