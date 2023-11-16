import { Module } from '@nestjs/common';
import { MuseumsService } from './museums.service';
import { MuseumsController } from './museums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Museum, MuseumSchema } from './schemas/museum.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Museum.name,
        schema: MuseumSchema,
      },
    ]),
  ],
  controllers: [MuseumsController],
  providers: [MuseumsService],
})
export class MuseumsModule {}
