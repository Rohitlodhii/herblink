import { jwtsecret } from "./env.js";
import jwt from "jsonwebtoken";
export class JwtToken {
    secretkey;
    constructor() {
        this.secretkey = jwtsecret;
    }
    createJwtToken(payload, expiresIn) {
        const options = { expiresIn };
        const token = jwt.sign(payload, this.secretkey, options);
        return token;
    }
    verifyJwtToken(token) {
        try {
            const decoded = jwt.verify(token, this.secretkey);
            return decoded;
        }
        catch (error) {
            return null;
        }
    }
}
//# sourceMappingURL=jwt.js.map