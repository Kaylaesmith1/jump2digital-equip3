"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateZoneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_zone_dto_1 = require("./create-zone.dto");
class UpdateZoneDto extends (0, mapped_types_1.PartialType)(create_zone_dto_1.CreateZoneDto) {
}
exports.UpdateZoneDto = UpdateZoneDto;
//# sourceMappingURL=update-zone.dto.js.map