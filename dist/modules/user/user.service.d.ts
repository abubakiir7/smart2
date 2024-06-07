import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { OtpService } from "../otp/otp.service";
export declare class UserService {
    private usersRepo;
    private otpService;
    constructor(usersRepo: typeof User, otpService: OtpService);
    create(createUserDto: CreateUserDto): Promise<{
        status: string;
        message: string;
        user: User;
    }>;
    findAll(): Promise<{
        status: string;
        users: User[];
    }>;
    findOne(id: number): Promise<{
        status: string;
        user: User;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        status: string;
        message: string;
        updatedUser: User;
    }>;
    remove(id: number): Promise<{
        status: string;
        message: string;
    }>;
    phone_is_exists(id: number): Promise<{
        exists: boolean;
    }>;
    email_is_exists(id: number): Promise<{
        exists: boolean;
    }>;
}
