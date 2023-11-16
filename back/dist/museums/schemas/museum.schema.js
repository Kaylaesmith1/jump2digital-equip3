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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuseumSchema = exports.Museum = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Museum = class Museum {
};
exports.Museum = Museum;
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'El nombre de Museo es requerido'] }),
    __metadata("design:type", String)
], Museum.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Las coordenadas del Museo es requerido'] }),
    __metadata("design:type", Number)
], Museum.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Las coordenadas del Museo es requerido'] }),
    __metadata("design:type", Number)
], Museum.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'El tipo de uso del Museo es requerido'] }),
    __metadata("design:type", String)
], Museum.prototype, "use_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: [true, 'El el tipo del equipamiento del Museo es requerido'],
    }),
    __metadata("design:type", String)
], Museum.prototype, "equipment_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'El ambito de Museo es requerido'] }),
    __metadata("design:type", String)
], Museum.prototype, "ambit", void 0);
exports.Museum = Museum = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Museum);
exports.MuseumSchema = mongoose_1.SchemaFactory.createForClass(Museum);
//# sourceMappingURL=museum.schema.js.map