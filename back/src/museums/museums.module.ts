import { Module } from '@nestjs/common';
import { MuseumsService } from './museums.service';
import { MuseumsController } from './museums.controller';

@Module({
  controllers: [MuseumsController],
  providers: [MuseumsService],
})
export class MuseumsModule {}
