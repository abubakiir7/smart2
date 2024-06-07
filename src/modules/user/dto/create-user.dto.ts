import { IsOptional, IsPhoneNumber, IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsPhoneNumber("UZ")
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
