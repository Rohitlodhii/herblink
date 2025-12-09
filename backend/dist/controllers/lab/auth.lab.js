import db from "../../config/db.js";
import { PasswordHash } from "../../config/passwordhash.js";
import { JwtToken } from "../../config/jwt.js";
import logger from "../../config/logger.js";
const pshash = new PasswordHash();
const JwtTokenInstance = new JwtToken();
export async function signUpLab(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                msg: "Email and Password are required"
            });
        }
        const exist = await db.lab.findUnique({
            where: {
                email: email
            }
        });
        if (exist) {
            return res.status(409).json({
                msg: "Account already exist , Try login"
            });
        }
        ;
        const encryptedpassword = await pshash.generateHash(password);
        const result = await db.lab.create({
            data: {
                email: email,
                password: encryptedpassword
            }
        });
        let token = JwtTokenInstance.createJwtToken({ userId: result?.id }, '1d');
        return res.status(200).json({
            msg: "Lab account created successfully",
            token: token
        });
    }
    catch (error) {
        logger.error("lab_signup_error", { error: error.message, stack: error.stack });
        return res.status(400).json({
            msg: "Internal Server error"
        });
    }
}
export async function loginLab(req, res) {
    try {
        console.log("Reached here");
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                msg: "Email and Password are required"
            });
        }
        const exist = await db.lab.findUnique({
            where: {
                email: email
            }
        });
        if (!exist) {
            return res.status(409).json({
                msg: "Account dosen't exist , Try sign Up"
            });
        }
        ;
        const checkPassword = await pshash.comparePassword(password, exist.password);
        if (!checkPassword) {
            return res.status(400).json({
                msg: "Email or password are incorrect"
            });
        }
        let token = JwtTokenInstance.createJwtToken({ userId: exist?.id }, '1d');
        return res.status(200).json({
            msg: "Lab account login successfully",
            token: token
        });
    }
    catch (error) {
        logger.error("lab_login_error", { error: error.message, stack: error.stack });
        return res.status(400).json({
            msg: "Internal Server error"
        });
    }
}
//# sourceMappingURL=auth.lab.js.map