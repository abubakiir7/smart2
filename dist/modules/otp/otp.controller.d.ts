/// <reference types="node" />
import { OtpService } from "./otp.service";
import { UUID } from "crypto";
export declare class OtpController {
    private readonly otpService;
    constructor(otpService: OtpService);
    create(body: {
        phone: string;
    }): Promise<{
        status: string;
        message: string;
        payload: {
            uuid: string;
        };
    }>;
    verifyOtp(body: {
        otp: string;
        uuid: UUID;
    }): Promise<{
        status: string;
        message: string;
    } | {
        status: string;
        message?: undefined;
    }>;
}
