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
exports.Ticket = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const seats_entity_1 = require("../../transport/entities/seats.entity");
let Ticket = class Ticket extends sequelize_typescript_1.Model {
};
exports.Ticket = Ticket;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", String)
], Ticket.prototype, "first_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", String)
], Ticket.prototype, "last_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(15) }),
    __metadata("design:type", String)
], Ticket.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", String)
], Ticket.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.INTEGER) }),
    __metadata("design:type", Array)
], Ticket.prototype, "trip_ids", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => seats_entity_1.Seats),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.INTEGER)) }),
    __metadata("design:type", Array)
], Ticket.prototype, "seat_ids", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Ticket.prototype, "ticket_unique_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "is_active", void 0);
exports.Ticket = Ticket = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'tickets' })
], Ticket);
//# sourceMappingURL=ticket.entity.js.map