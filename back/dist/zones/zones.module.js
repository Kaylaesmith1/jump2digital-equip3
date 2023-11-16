"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesModule = void 0;
const common_1 = require("@nestjs/common");
const zones_service_1 = require("./zones.service");
const zones_controller_1 = require("./zones.controller");
const mongoose_1 = require("@nestjs/mongoose");
const zone_schema_1 = require("./schemas/zone.schema");
let ZonesModule = class ZonesModule {
};
exports.ZonesModule = ZonesModule;
exports.ZonesModule = ZonesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: zone_schema_1.Zone.name,
                    schema: zone_schema_1.ZoneSchema,
                },
            ]),
        ],
        controllers: [zones_controller_1.ZonesController],
        providers: [zones_service_1.ZonesService],
    })
], ZonesModule);
//# sourceMappingURL=zones.module.js.map