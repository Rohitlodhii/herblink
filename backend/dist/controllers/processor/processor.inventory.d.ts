import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function createInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listInventories(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getInventoryById(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=processor.inventory.d.ts.map