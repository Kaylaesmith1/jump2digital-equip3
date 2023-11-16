import { Test, TestingModule } from '@nestjs/testing';
import { MuseumsController } from './museums.controller';
import { MuseumsService } from './museums.service';

describe('MuseumsController', () => {
  let controller: MuseumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuseumsController],
      providers: [MuseumsService],
    }).compile();

    controller = module.get<MuseumsController>(MuseumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
