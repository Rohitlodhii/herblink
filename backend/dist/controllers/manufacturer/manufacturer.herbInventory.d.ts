import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function createHerbInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listHerbInventories(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getHerbInventoryById(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateHerbInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=manufacturer.herbInventory.d.ts.map