import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags, ApiOperation, ApiBody } from "@nestjs/swagger";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        firstName: { type: "string", example: "Sharifiddin aka bulin endi" },
        phone: { type: "string", example: "+1234567890" },
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a user by ID" })
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a user by ID" })
  @ApiBody({ type: UpdateUserDto })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a user by ID" })
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }

  @Post("phone_is_exists")
  @ApiOperation({ summary: "Check if a phone number exists" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        id: { type: "number", example: 1 },
      },
    },
  })
  phone_is_exists(@Body() body: { id: number }) {
    return this.userService.phone_is_exists(body.id);
  }

  @Post("login")
  @HttpCode(200)
  @ApiOperation({ summary: "Login user only with phone number" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        phoneNUmber: { type: "number", example: "+998330073378" },
      },
    },
  })
  login(@Body() phoneNumber: { phoneNumber: string }) {
    return this.userService.login(phoneNumber.phoneNumber);
  }
}
