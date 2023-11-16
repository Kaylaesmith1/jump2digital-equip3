import { Test, TestingModule } from '@nestjs/testing';
import { MuseumsService } from './museums.service';

describe('MuseumsService', () => {
  let service: MuseumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuseumsService],
    }).compile();

    service = module.get<MuseumsService>(MuseumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
