export declare class TwilioService {
    private client;
    constructor();
    sendOTP(phone: string): Promise<import("twilio/lib/rest/verify/v2/service/verification.js").VerificationInstance>;
    verifyOtp(phone: string, code: string): Promise<boolean>;
}
//# sourceMappingURL=twilio.d.ts.map