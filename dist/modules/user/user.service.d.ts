import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { OtpService } from "../otp/otp.service";
export declare class UserService {
    private usersRepo;
    private otpService;
    constructor(usersRepo: typeof User, otpService: OtpService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        status: string;
        messgae: string;
        updated_data: Promise<[affectedCount: number]>;
    }>;
    remove(id: number): string;
    phone_is_exists(id: number): Promise<boolean>;
    email_is_exists(id: number): Promise<boolean>;
}
