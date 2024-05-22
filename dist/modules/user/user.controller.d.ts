import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("src/modules/user/entities/user.entity").User>;
    findAll(): Promise<import("src/modules/user/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("src/modules/user/entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        status: string;
        messgae: string;
        updated_data: Promise<[affectedCount: number]>;
    }>;
    remove(id: string): string;
    phone_is_exists(id: {
        id: number;
    }): Promise<boolean>;
}
