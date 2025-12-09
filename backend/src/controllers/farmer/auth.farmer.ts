import { Request ,Response } from "express";
import db from "../../config/db.js";
import { JwtToken } from "../../config/jwt.js";
import logger from "../../config/logger.js";
import { log } from "console";
import { TwilioService } from "../../config/twilio.js";


const otpController = new TwilioService();
const JwtTokenInstance = new JwtToken();


export async function FarmerSignUp(req: Request, res: Response) {
    try {
        const { fullname, mobileNumber } = req.body;

        if (!mobileNumber || !fullname) {
            logger.warn(`Farmer_invalid_credential_sendOtp ${mobileNumber} ${fullname}`);
            return res.status(400).json({
                error: "Missing mobile number or fullname"
            });
        }

        let farmer = await db.farmer.findUnique({
            where: { mobileNumber }
        });

        // CASE 2 — farmer exists but not verified
        if (farmer && !farmer.mobileNumberVerified) {
            logger.warn(`farmer_exists_but_unverified ${mobileNumber}`);

            // Optional: update fullname if changed
            await db.farmer.update({
                where: { mobileNumber },
                data: { fullName: fullname }
            });

            await otpController.sendOTP(mobileNumber);

            return res.status(200).json({
                msg: "OTP resent to existing unverified account"
            });
        }

        // CASE 3 — farmer verified → block
        if (farmer && farmer.mobileNumberVerified) {
            logger.warn(`farmer_already_verified ${mobileNumber}`);
            return res.status(409).json({
                msg: "mobile number already exists"
            });
        }

        // CASE 1 — farmer does not exist → create new account
        await db.farmer.create({
            data: {
                mobileNumber,
                fullName: fullname,
                mobileNumberVerified: false,
                isVerified: false
            }
        });

        await otpController.sendOTP(mobileNumber);

        res.status(200).json({
            msg: "OTP sent successfully"
        });

    } catch (error) {
        logger.error("Error in FarmerSignUp", { 
            error: (error as Error).message, 
            stack: (error as Error).stack 
        });
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function FarmerLogin(req :Request , res: Response){
    try {
        const { mobileNumber } = req.body;
        console.log("new req : " + mobileNumber)
        if(!mobileNumber){
            logger.warn(`Farmer_invalid_credential_login : ${mobileNumber}`);
            return res.status(404).json({
                msg : "Mobile number not found",
            })
        }

        let farmer = await db.farmer.findUnique({
            where : {mobileNumber}
        });

        if(!farmer){
            logger.warn(`Farmer_not_exist ${mobileNumber}`);
            return res.status(404).json({
                msg: "Account not found"
            })
        }
        
        try {
            await otpController.sendOTP(mobileNumber);
        } catch (err) {
            logger.error("Farmer_login_sendOTP_failed", { error: (err as Error).message, stack: (err as Error).stack });
            return res.status(500).json({
                msg: "Failed to send OTP. Please try again shortly."
            });
        }

        return res.status(200).json({
            msg: "OTP sent successfully"
        });


    } catch (error) {
        logger.error("Error in Farmer Login", { 
            error: (error as Error).message, 
            stack: (error as Error).stack 
        });
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export async function FarmerSignUpVerifyOtp(req:Request , res:Response){
    try {
        const { mobileNumber , otp} = req.body;
        console.log("hello")

        if(!mobileNumber || !otp ){
            logger.warn(`Farmer_invalid_credential_otp  : ${mobileNumber} : ${otp}`)
            return res.status(404).json({
                msg : "Mobile Number or OTP not found!"
            })
        };  

        

        let otpcheck = await otpController.verifyOtp(mobileNumber , otp);
        if( !otpcheck ){
            logger.warn(`Farmer_otp_not_verify ${mobileNumber}`)
            return res.status(401).json({
                msg : "OTP verification failed"
            })
        };

        const user = await db.farmer.findUnique({
            where: { mobileNumber },
            select: { id: true, mobileNumberVerified: true },
          });

        if(!user){
            logger.error(`Farmer_NOT_FOUND_AFTER_OTP_VERIFIED ${mobileNumber} ${otp}`)
            return res.status(404).json({
                msg : "Internal server error"
            })
        }

        if (!user.mobileNumberVerified) {
            await db.farmer.update({
              where: { id: user.id },
              data: { mobileNumberVerified: true },
            });
        }

        let token = JwtTokenInstance.createJwtToken( { userId : user?.id } , '1d');

        res.status(200).json({
            msg : "Otp verified",
            token
        })        

    } catch (error) {
        logger.error("farmer_Verify_otp_internal_error", { error: (error as Error).message, stack: (error as Error).stack });
        return res.status(400).json({
            msg : "Internal Server error"
        })
    }
}

