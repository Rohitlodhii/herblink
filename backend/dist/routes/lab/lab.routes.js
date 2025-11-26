import { Router } from "express";
import labAuthRouter from "./lab.auth.route.js";
import labLicenseRouter from "./lab.license.route.js";
const labRouter = Router();
labRouter.use('/auth', labAuthRouter);
labRouter.use('/license', labLicenseRouter);
export default labRouter;
//# sourceMappingURL=lab.routes.js.map