/// <reference types="node" />
import { Otp } from "./entities/otp.entity";
import { UUID } from "crypto";
export declare class OtpService {
    private otpRepo;
    constructor(otpRepo: typeof Otp);
    generateOtp(phone: string): Promise<{
        status: string;
        message: string;
        payload: {
            uuid: string;
        };
    }>;
    verifyOtp(otp: number, uuid: UUID): Promise<{
        status: string;
        message: string;
    } | {
        status: string;
        message?: undefined;
    }>;
}
