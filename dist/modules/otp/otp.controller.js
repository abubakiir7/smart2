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
exports.OtpController = void 0;
const common_1 = require("@nestjs/common");
const otp_service_1 = require("./otp.service");
const swagger_1 = require("@nestjs/swagger");
let OtpController = class OtpController {
    constructor(otpService) {
        this.otpService = otpService;
    }
    create(body) {
        return this.otpService.generateOtp(body?.phone);
    }
    verifyOtp(body) {
        return this.otpService.verifyOtp(+body.otp, body.uuid);
    }
};
exports.OtpController = OtpController;
__decorate([
    (0, common_1.Post)("send-otp"),
    (0, swagger_1.ApiOperation)({ summary: "Send OTP to the specified phone number" }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                phone: { type: "string", example: "+1234567890" },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("check-otp"),
    (0, swagger_1.ApiOperation)({ summary: "Verify the provided OTP using the UUID" }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                otp: { type: "string", example: "123456" },
                uuid: {
                    type: "string",
                    format: "uuid",
                    example: "123e4567-e89b-12d3-a456-426614174000",
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "verifyOtp", null);
exports.OtpController = OtpController = __decorate([
    (0, swagger_1.ApiTags)("otp"),
    (0, common_1.Controller)("otp"),
    __metadata("design:paramtypes", [otp_service_1.OtpService])
], OtpController);
//# sourceMappingURL=otp.controller.js.map