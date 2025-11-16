import { Router } from "express";
import farmerAuthRouter from "./auth/farmer.auth.route.js";
import farmerLicenseRouter from "./license/farmer.license.route.js";
const farmerRouter = Router();
farmerRouter.use('/auth', farmerAuthRouter);
farmerRouter.use('/license', farmerLicenseRouter);
export default farmerRouter;
//# sourceMappingURL=farmer.route.js.map