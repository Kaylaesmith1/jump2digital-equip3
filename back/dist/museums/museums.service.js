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
exports.MuseumsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const museum_schema_1 = require("./schemas/museum.schema");
const mongoose_2 = require("mongoose");
let MuseumsService = class MuseumsService {
    constructor(museumModel) {
        this.museumModel = museumModel;
    }
    async create(createMuseumDto) {
        try {
            await this.museumModel.create(createMuseumDto);
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll() {
        try {
            const museums = await this.museumModel.find();
            return museums;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOne(id) {
        return `This action returns a #${id} museum`;
    }
    remove(id) {
        return `This action removes a #${id} museum`;
    }
};
exports.MuseumsService = MuseumsService;
exports.MuseumsService = MuseumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(museum_schema_1.Museum.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MuseumsService);
//# sourceMappingURL=museums.service.js.map