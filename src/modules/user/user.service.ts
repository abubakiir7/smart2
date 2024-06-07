import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./entities/user.entity";
import { OtpService } from "../otp/otp.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private usersRepo: typeof User,
    private otpService: OtpService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersRepo.create(createUserDto);
      return {
        status: "success",
        message: "User created successfully",
        user,
      };
    } catch (error) {
      throw new InternalServerErrorException("Error creating user");
    }
  }

  async findAll() {
    try {
      const users = await this.usersRepo.findAll();
      return {
        status: "success",
        users,
      };
    } catch (error) {
      throw new InternalServerErrorException("Error fetching users");
    }
  }

  async findOne(id: number) {
    const user = await this.usersRepo.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return {
      status: "success",
      user,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
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

    throw new NotFoundException(`User with ID ${id} not found`);
  }

  async remove(id: number) {
    const user = await this.usersRepo.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.usersRepo.destroy({ where: { id } });
    return {
      status: "success",
      message: "User deleted successfully",
    };
  }

  async phone_is_exists(id: number) {
    const user = await this.usersRepo.findByPk(id);
    return {
      exists: user?.phone != null,
    };
  }

  async email_is_exists(id: number) {
    const user = await this.usersRepo.findByPk(id);
    return {
      exists: user?.email != null,
    };
  }
}
