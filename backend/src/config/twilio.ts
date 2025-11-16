
import {  twilioVars } from "./env.js";
import  twilio  from 'twilio'

export class TwilioService {
    private client;

    constructor(){
        this.client = twilio(
            twilioVars.accountSid ,
            twilioVars.accountToken!
        )
    }

    async sendOTP( phone : string ){
        try {
            const res = await this.client.verify.v2
                .services(twilioVars.serviceSid!)
                .verifications.create({ to : phone , channel : "sms"});
            return res;
        } catch (error) {
            console.error("Error sending Otp:" , error);
            throw new Error("Failed to send Otp");
        }
    }

    async verifyOtp( phone : string , code : string) {
        try {
            const res = await this.client.verify.v2
                .services(twilioVars.serviceSid!)
                .verificationChecks.create({ to : phone , code});
            return res.status === "approved";
        } catch (error) {
            console.error("Error verifying Otp:" , error);
            throw new Error("Failed to verify Otp");
        }
    }

}