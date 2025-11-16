import type { StringValue } from "ms";
export interface TokenPayload {
    userId: string;
}
export declare class JwtToken {
    private secretkey;
    constructor();
    createJwtToken(payload: TokenPayload, expiresIn: number | StringValue): string;
    verifyJwtToken(token: string): TokenPayload | null;
}
//# sourceMappingURL=jwt.d.ts.map