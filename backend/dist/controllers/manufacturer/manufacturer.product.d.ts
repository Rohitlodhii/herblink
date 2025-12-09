import { Request, Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function createProduct(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getFullProductDetails(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listProducts(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProductById(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateProduct(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteProduct(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=manufacturer.product.d.ts.map