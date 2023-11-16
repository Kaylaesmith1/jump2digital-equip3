"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuseumsModule = void 0;
const common_1 = require("@nestjs/common");
const museums_service_1 = require("./museums.service");
const museums_controller_1 = require("./museums.controller");
const mongoose_1 = require("@nestjs/mongoose");
const museum_schema_1 = require("./schemas/museum.schema");
let MuseumsModule = class MuseumsModule {
};
exports.MuseumsModule = MuseumsModule;
exports.MuseumsModule = MuseumsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: museum_schema_1.Museum.name,
                    schema: museum_schema_1.MuseumSchema,
                },
            ]),
        ],
        controllers: [museums_controller_1.MuseumsController],
        providers: [museums_service_1.MuseumsService],
    })
], MuseumsModule);
//# sourceMappingURL=museums.module.js.map