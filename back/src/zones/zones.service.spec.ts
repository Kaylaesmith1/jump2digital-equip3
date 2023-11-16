/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ZonesService } from './zones.service';
import { Zone } from './schemas/zone.schema';
import { getModelToken } from '@nestjs/mongoose';

const MOCK_ZONES = [
  {
    dn: 11,
    coordinates: [
      [41.4129978777, 2.1766521325],
      [41.4129078111, 2.1766532698],
      [41.4129069549, 2.1765336284],
      [41.4128168883, 2.1765347659],
      [41.4128186007, 2.1767740483],
      [41.4129086673, 2.1767729112],
      [41.4129095233, 2.1768925525],
      [41.4129995899, 2.1768914155],
      [41.4129978777, 2.1766521325],
    ],
  },
  {
    dn: 11,
    coordinates: [
      [41.4128160319, 2.1764151248],
      [41.4127259653, 2.1764162624],
      [41.4127268217, 2.1765359034],
      [41.4128168883, 2.1765347659],
      [41.4128160319, 2.1764151248],
    ],
  },
];

describe('ZonesService', () => {
  let service: ZonesService;

  const mockZoneModel = {
    find: jest.fn().mockImplementationOnce((page: number, limit: number) => ({
      skip: jest.fn().mockResolvedValueOnce((skip: number) => ({
        limit: jest
          .fn()
          .mockResolvedValueOnce((limit: number) =>
            Promise.resolve(MOCK_ZONES),
          ),
      })),
    })),
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
    const page = 1;
    const limit = 500;
    expect(await service.findAll(page, limit)).toMatchObject(MOCK_ZONES);
  });
});
