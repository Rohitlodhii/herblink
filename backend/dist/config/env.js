import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT;
export const twilioVars = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    accountToken: process.env.TWILIO_ACCOUNT_TOKEN,
    serviceSid: process.env.TWILIO_SERVICE_SID,
};
export const jwtsecret = process.env.JWT_SECRET;
export const saltRounds = Number(process.env.SALT_ENCRYPTION);
//# sourceMappingURL=env.js.map