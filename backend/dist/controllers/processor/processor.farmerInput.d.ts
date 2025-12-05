import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function addFarmerInput(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listFarmerInputsByInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getFarmerInputByEventId(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=processor.farmerInput.d.ts.map