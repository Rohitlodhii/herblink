import { jwtsecret } from "./env.js";
import jwt , { JwtPayload ,SignOptions} from "jsonwebtoken"
import type { StringValue } from "ms";


export interface TokenPayload {
    userId : string ;
}

export class JwtToken {
    private secretkey;

    constructor() {
        this.secretkey = jwtsecret;
    }


    createJwtToken(payload : TokenPayload , expiresIn : number | StringValue  ) : string {
        const options : SignOptions = { expiresIn };
        const token = jwt.sign(payload , this.secretkey ,options);
        return token;
    } 

    verifyJwtToken( token : string ) :  TokenPayload | null {
        try {
            const decoded = jwt.verify(token, this.secretkey) as JwtPayload;
            return decoded as TokenPayload;
        } catch (error) {   
            return null;
        }
    }
}