"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const zone_schema_1 = require("./schemas/zone.schema");
const mongoose_2 = require("@nestjs/mongoose");
let ZonesService = class ZonesService {
    constructor(zoneModel) {
        this.zoneModel = zoneModel;
    }
    async create(createZoneDto) {
        try {
            await this.zoneModel.create(createZoneDto);
        }
        catch (error) {
            console.log(error);
        }
        return 'This action adds a new zone';
    }
    async findAll() {
        try {
            const zones = await this.zoneModel.find();
            return zones;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOne(id) {
        return `This action returns a #${id} zone`;
    }
};
exports.ZonesService = ZonesService;
exports.ZonesService = ZonesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(zone_schema_1.Zone.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ZonesService);
//# sourceMappingURL=zones.service.js.map