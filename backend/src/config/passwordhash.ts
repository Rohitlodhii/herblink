import { saltRounds } from "./env.js";
import bcrypt from 'bcrypt';
import logger from "./logger.js";

export class PasswordHash {
    private SaltRounds : number;

    constructor() {
        this.SaltRounds = saltRounds;
    }


    async generateHash( password : string) : Promise<string> {
        try {
            const salt = await bcrypt.genSalt(this.SaltRounds);
            const hash = await bcrypt.hash(password , salt);
            return hash;
        } catch (error) {
            logger.error(`BCRYPT_ERROR_HASHING_PASSWORD : ${error}`);
            throw new Error("Failed to hash password");
        }
    }


    async comparePassword (password : string , hashedPassword : string ) : Promise<boolean> {
        return await bcrypt.compare(password , hashedPassword);
    }
}