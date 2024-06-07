import { Controller, Post, Body } from "@nestjs/common";
import { OtpService } from "./otp.service";
import { ApiTags, ApiOperation, ApiBody } from "@nestjs/swagger";
import { UUID } from "crypto";

@ApiTags("otp")
@Controller("otp")
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post("send-otp")
  @ApiOperation({ summary: "Send OTP to the specified phone number" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        phone: { type: "string", example: "+1234567890" },
      },
    },
  })
  create(@Body() body: { phone: string }) {
    return this.otpService.generateOtp(body?.phone);
  }

  @Post("check-otp")
  @ApiOperation({ summary: "Verify the provided OTP using the UUID" })
  @ApiBody({
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
  })
  verifyOtp(@Body() body: { otp: string; uuid: UUID }) {
    return this.otpService.verifyOtp(+body.otp, body.uuid);
  }
}
