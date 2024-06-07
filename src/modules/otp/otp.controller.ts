import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OtpService } from './otp.service';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { UUID } from 'crypto';
import { log } from 'console';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('send-otp')
  create(@Body() body: {phone: string}) { 
    return this.otpService.generateOtp(body?.phone);
  }

  @Post("check-otp")
  verifyOtp(@Body() body: { otp: string, uuid: UUID }) {
    return this.otpService.verifyOtp(+body.otp, body.uuid)
  }
}
