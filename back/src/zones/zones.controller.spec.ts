import { Test, TestingModule } from '@nestjs/testing';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Zone } from './schemas/zone.schema';

const MOCK_ZONES = [
  {
    dn: 1,
    geometry: '44',
  },
];

describe('ZonesService', () => {
  let controller: ZonesService;
  const mockZonesService = {
    findAll: jest.fn().mockReturnValue(Promise.resolve(MOCK_ZONES)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonesController],
      providers: [
        ZonesService,
        {
          provide: getModelToken(Zone.name),
          useValue: {},
        },
      ],
    })
      .overrideProvider(ZonesService)
      .useValue(mockZonesService)
      .compile();

    controller = module.get<ZonesService>(ZonesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return and array of zones', async () => {
    expect(await controller.findAll()).toMatchObject(MOCK_ZONES);
  });
});
