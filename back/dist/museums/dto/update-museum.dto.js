"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMuseumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_museum_dto_1 = require("./create-museum.dto");
class UpdateMuseumDto extends (0, mapped_types_1.PartialType)(create_museum_dto_1.CreateMuseumDto) {
}
exports.UpdateMuseumDto = UpdateMuseumDto;
//# sourceMappingURL=update-museum.dto.js.map