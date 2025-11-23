import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function getFarmerData(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getFarmerLandInfo(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=getter.farmer.d.ts.map