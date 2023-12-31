import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumsModule } from './museums/museums.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ZonesModule } from './zones/zones.module';

@Module({
  imports: [
    MuseumsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:1234@secretbcn.aa4998n.mongodb.net/',
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    ZonesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
