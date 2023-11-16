import { Test, TestingModule } from '@nestjs/testing';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Zone } from './schemas/zone.schema';

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
  let controller: ZonesService;
  const mockZonesService = {
    findAll: jest
      .fn()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .mockImplementation((page: number, limit: number) =>
        Promise.resolve(MOCK_ZONES),
      ),
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
    const page = 1;
    const limit = 1;
    expect(await controller.findAll(page, limit)).toMatchObject(MOCK_ZONES);
  });
});
