import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function createProductInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listProductInventories(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProductInventoryById(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateProductInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteProductInventory(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=manufacturer.productInventory.d.ts.map