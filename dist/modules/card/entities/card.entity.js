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
exports.Card = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
let Card = class Card extends sequelize_1.Model {
};
exports.Card = Card;
__decorate([
    (0, sequelize_typescript_1.Default)(uuid_1.v4),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Card.prototype, "uuid", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER }),
    __metadata("design:type", Number)
], Card.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL }),
    __metadata("design:type", Number)
], Card.prototype, "balance", void 0);
exports.Card = Card = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "card" })
], Card);
//# sourceMappingURL=card.entity.js.map