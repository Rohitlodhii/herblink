import { Response } from 'express';
import { AuthenticatedRequest } from '../../middlewares/jwt.verify.js';
export declare function addPersonalInfoFarmer(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function addLandInfo(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function applyFarmerLicense(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=license.farmer.d.ts.map