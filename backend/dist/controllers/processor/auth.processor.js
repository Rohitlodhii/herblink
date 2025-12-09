import db from "../../config/db.js";
import { PasswordHash } from "../../config/passwordhash.js";
import { JwtToken } from "../../config/jwt.js";
import logger from "../../config/logger.js";
const pshash = new PasswordHash();
const JwtTokenInstance = new JwtToken();
export async function signUpProcessor(req, res) {
    try {
        console.log("[signUpProcessor] Request received");
        const { email, password, name, address, organization } = req.body;
        console.log("[signUpProcessor] Request body:", { email, name, address, organization, passwordLength: password?.length });
        if (!email || !password) {
            console.log("[signUpProcessor] Validation failed: Missing email or password");
            return res.status(400).json({
                msg: "Email and Password are required",
            });
        }
        console.log("[signUpProcessor] Checking if processor exists with email:", email);
        const exist = await db.processor.findUnique({
            where: {
                email: email,
            },
        });
        if (exist) {
            console.log("[signUpProcessor] Processor already exists with email:", email);
            return res.status(409).json({
                msg: "Account already exist, Try login",
            });
        }
        console.log("[signUpProcessor] No existing processor found, creating new account");
        console.log("[signUpProcessor] Hashing password...");
        const encryptedpassword = await pshash.generateHash(password);
        console.log("[signUpProcessor] Password hashed successfully");
        console.log("[signUpProcessor] Creating processor in database...");
        const result = await db.processor.create({
            data: {
                email: email,
                password: encryptedpassword,
                name,
                address,
                organization,
            },
        });
        console.log("[signUpProcessor] Processor created successfully with ID:", result?.id);
        console.log("[signUpProcessor] Generating JWT token...");
        const token = JwtTokenInstance.createJwtToken({ userId: result?.id }, "1d");
        console.log("[signUpProcessor] JWT token generated successfully");
        console.log("[signUpProcessor] Sign up successful for email:", email);
        return res.status(200).json({
            msg: "Processor account created successfully",
            token: token,
        });
    }
    catch (error) {
        console.error("[signUpProcessor] Error occurred:", error.message);
        console.error("[signUpProcessor] Error stack:", error.stack);
        logger.error("processor_signup_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(400).json({
            msg: "Internal Server error",
        });
    }
}
export async function loginProcessor(req, res) {
    try {
        console.log("[loginProcessor] Request received");
        const { email, password } = req.body;
        console.log("[loginProcessor] Request body:", { email, passwordLength: password?.length });
        if (!email || !password) {
            console.log("[loginProcessor] Validation failed: Missing email or password");
            return res.status(400).json({
                msg: "Email and Password are required",
            });
        }
        console.log("[loginProcessor] Checking if processor exists with email:", email);
        const exist = await db.processor.findUnique({
            where: {
                email: email,
            },
        });
        if (!exist) {
            console.log("[loginProcessor] Processor not found with email:", email);
            return res.status(404).json({
                msg: "Account doesn't exist, Try sign Up",
            });
        }
        console.log("[loginProcessor] Processor found with ID:", exist?.id);
        console.log("[loginProcessor] Comparing password...");
        const checkPassword = await pshash.comparePassword(password, exist.password);
        if (!checkPassword) {
            console.log("[loginProcessor] Password comparison failed for email:", email);
            return res.status(400).json({
                msg: "Email or password are incorrect",
            });
        }
        console.log("[loginProcessor] Password verified successfully");
        console.log("[loginProcessor] Generating JWT token...");
        const token = JwtTokenInstance.createJwtToken({ userId: exist?.id }, "1d");
        console.log("[loginProcessor] JWT token generated successfully");
        console.log("[loginProcessor] Login successful for email:", email);
        return res.status(200).json({
            msg: "Processor account login successfully",
            token: token,
        });
    }
    catch (error) {
        console.error("[loginProcessor] Error occurred:", error.message);
        console.error("[loginProcessor] Error stack:", error.stack);
        logger.error("processor_login_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(400).json({
            msg: "Internal Server error",
        });
    }
}
//# sourceMappingURL=auth.processor.js.map