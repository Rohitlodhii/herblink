import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function upsertProcessingPlantInfo(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProcessingPlantInfo(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=processor.plant.d.ts.map