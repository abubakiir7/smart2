import { Injectable } from "@nestjs/common";
import { CreateOtpDto } from "./dto/create-otp.dto";
import { UpdateOtpDto } from "./dto/update-otp.dto";
import { Otp } from "./entities/otp.entity";
import { InjectModel } from "@nestjs/sequelize";
import { generateOTP } from "../../helpers/otp-generator";
import { addMinutesToDate } from "../../helpers/add-minutes";
import { log } from "console";
import { UUID } from "crypto";

@Injectable()
export class OtpService {
  constructor(@InjectModel(Otp) private otpRepo: typeof Otp) {}
  async generateOtp(phone: string) {
    // generating otp
    const otp = generateOTP(4);
    const expiration_time = addMinutesToDate(new Date(), 1);
    await this.otpRepo.destroy({ where: { phone } });
    const saved_data = await this.otpRepo.create({
      otp: 5656,
      expiration_time,
      phone,
    });
    // sending message

    return {
      status: "success",
      message: "otp sent successfully",
      payload: { uuid: saved_data.uuid },
    };
  }

  async verifyOtp(otp: number, uuid: UUID) {
    log(uuid, otp);
    const saved_otp = await this.otpRepo.findOne({ where: { uuid: uuid } });
    if (!saved_otp) return { status: "failed", message: "uuid is incorrect" };
    log(saved_otp.expiration_time, new Date());
    // checking expiration date
    if (saved_otp.expiration_time < new Date())
      return { status: "failed", message: "otp expired" };
    // checking otp
    if (saved_otp.otp !== otp)
      return { status: "failed", message: "otp is not correct" };
    return { status: "success" };
  }
}
