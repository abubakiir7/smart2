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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./entities/user.entity");
const otp_service_1 = require("../otp/otp.service");
let UserService = class UserService {
    constructor(usersRepo, otpService) {
        this.usersRepo = usersRepo;
        this.otpService = otpService;
    }
    async create(createUserDto) {
        try {
            const user = await this.usersRepo.create(createUserDto);
            return {
                status: "success",
                message: "User created successfully",
                user,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error creating user");
        }
    }
    async findAll() {
        try {
            const users = await this.usersRepo.findAll();
            return {
                status: "success",
                users,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error fetching users");
        }
    }
    async findOne(id) {
        const user = await this.usersRepo.findByPk(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return {
            status: "success",
            user,
        };
    }
    async update(id, updateUserDto) {
        const [updated] = await this.usersRepo.update(updateUserDto, {
            where: { id },
        });
        if (updated) {
            const updatedUser = await this.usersRepo.findByPk(id);
            return {
                status: "success",
                message: "User updated successfully",
                updatedUser,
            };
        }
        throw new common_1.NotFoundException(`User with ID ${id} not found`);
    }
    async remove(id) {
        const user = await this.usersRepo.findByPk(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        await this.usersRepo.destroy({ where: { id } });
        return {
            status: "success",
            message: "User deleted successfully",
        };
    }
    async phone_is_exists(id) {
        const user = await this.usersRepo.findByPk(id);
        return {
            exists: user?.phone != null,
        };
    }
    async email_is_exists(id) {
        const user = await this.usersRepo.findByPk(id);
        return {
            exists: user?.email != null,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, otp_service_1.OtpService])
], UserService);
//# sourceMappingURL=user.service.js.map