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
exports.TripController = void 0;
const common_1 = require("@nestjs/common");
const trip_service_1 = require("./trip.service");
const create_trip_dto_1 = require("./dto/create-trip.dto");
const update_trip_dto_1 = require("./dto/update-trip.dto");
const find_trip_dto_1 = require("./dto/find-trip.dto");
const swagger_1 = require("@nestjs/swagger");
let TripController = class TripController {
    constructor(tripService) {
        this.tripService = tripService;
    }
    create(createTripDto) {
        return this.tripService.create(createTripDto);
    }
    findAll() {
        return this.tripService.findAll();
    }
    findAllNotBeginRoutes() {
        return this.tripService.findAllNotBeginRoutes();
    }
    findTripsInActive() {
        return this.tripService.findTripsInActive();
    }
    findOne(id) {
        return this.tripService.findOne(+id);
    }
    update(id, updateTripDto) {
        return this.tripService.update(+id, updateTripDto);
    }
    remove(id) {
        return this.tripService.remove(+id);
    }
    findTrip(findTripDto, res) {
        return this.tripService.findTrip(findTripDto);
    }
};
exports.TripController = TripController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_dto_1.CreateTripDto]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("finding-all-not-begun-routes"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findAllNotBeginRoutes", null);
__decorate([
    (0, common_1.Get)("finding-active-routes"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findTripsInActive", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trip_dto_1.UpdateTripDto]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("find-trip"),
    (0, swagger_1.ApiOperation)({ summary: "Finding all available routes" }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                from: { type: "string", example: "1" },
                to: { type: "string", example: "2" },
                departing: { type: "string", format: "date", example: "" },
                return: { type: "string", format: "date", example: "" },
                passengers: { type: "integer", example: 1 },
            },
            required: ["from", "to", "passengers"],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_trip_dto_1.FindTripDto, Object]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findTrip", null);
exports.TripController = TripController = __decorate([
    (0, swagger_1.ApiTags)("trip"),
    (0, common_1.Controller)("trip"),
    __metadata("design:paramtypes", [trip_service_1.TripService])
], TripController);
//# sourceMappingURL=trip.controller.js.map