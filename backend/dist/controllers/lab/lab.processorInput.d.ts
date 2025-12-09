import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
export declare function addLabProcessorInput(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listLabProcessorInputs(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listLabProcessorInputsWithoutReport(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateLabProcessorInput(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=lab.processorInput.d.ts.map