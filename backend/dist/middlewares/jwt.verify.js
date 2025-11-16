import logger from "../config/logger.js";
import { JwtToken } from "../config/jwt.js";
const JwtTokenInstance = new JwtToken();
export async function verifyJwt(req, res, next) {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            logger.warn("JWT_Missing_Authorization_Header");
            return res.status(401).json({ msg: "Authorization token missing." });
        }
        const token = authHeader.split(" ")[1];
        if (!token || token?.length === 0) {
            logger.warn("JWT_Missing_Authorization_Header");
            return res.status(401).json({ msg: "Authorization token missing." });
        }
        // Verify JWT
        const payload = JwtTokenInstance.verifyJwtToken(token);
        if (!payload || !payload.userId) {
            logger.warn("JWT_Invalid_Or_Malformed_Token");
            return res.status(403).json({ msg: "Invalid or expired token." });
        }
        req.userId = payload.userId;
        next();
    }
    catch (error) {
        logger.error("JWT_Verification_Error", {
            message: error.message,
            stack: error.stack,
        });
        return res.status(403).json({ msg: "Invalid or expired token." });
    }
}
//# sourceMappingURL=jwt.verify.js.map