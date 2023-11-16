import { Test, TestingModule } from '@nestjs/testing';
import { ZonesService } from './zones.service';
import { Zone } from './schemas/zone.schema';
import { getModelToken } from '@nestjs/mongoose';

const MOCK_ZONES = [
  {
    dn: 1,
    geometry: '44',
  },
];

describe('ZonesService', () => {
  let service: ZonesService;

  const mockZoneModel = {
    find: jest.fn().mockReturnValue(Promise.resolve(MOCK_ZONES)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZonesService,
        {
          provide: getModelToken(Zone.name),
          useValue: mockZoneModel,
        },
      ],
    }).compile();

    service = module.get<ZonesService>(ZonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return and array of zones', async () => {
    expect(await service.findAll()).toMatchObject(MOCK_ZONES);
  });
});
