import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  // increase the payload limit
  app.use(bodyParser.json({ limit: '50mb' }));
  await app.listen(3001);
}
bootstrap();
