import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        status: string;
        message: string;
        user: import("src/modules/user/entities/user.entity").User;
    }>;
    findAll(): Promise<{
        status: string;
        users: import("src/modules/user/entities/user.entity").User[];
    }>;
    findOne(id: string): Promise<{
        status: string;
        user: import("src/modules/user/entities/user.entity").User;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        status: string;
        message: string;
        updatedUser: import("src/modules/user/entities/user.entity").User;
    }>;
    remove(id: string): Promise<{
        status: string;
        message: string;
    }>;
    phone_is_exists(body: {
        id: number;
    }): Promise<{
        exists: boolean;
    }>;
    login(phoneNumber: {
        phoneNumber: string;
    }): Promise<{
        status: string;
        message: string;
        payload: {
            uuid: string;
        };
    } | {
        status: string;
        message: string;
    }>;
}
