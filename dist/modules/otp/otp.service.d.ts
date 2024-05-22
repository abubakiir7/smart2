/// <reference types="node" />
import { Otp } from './entities/otp.entity';
import { UUID } from 'crypto';
export declare class OtpService {
    private otpRepo;
    constructor(otpRepo: typeof Otp);
    generateOtp(phone: string): Promise<any>;
    verifyOtp(otp: number, uuid: UUID): Promise<{
        message: string;
    }>;
}
