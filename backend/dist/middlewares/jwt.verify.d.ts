import { Request, Response, NextFunction } from "express";
export interface AuthenticatedRequest extends Request {
    userId?: string;
}
export declare function verifyJwt(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=jwt.verify.d.ts.map