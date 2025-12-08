import { Router } from "express";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
import { addLabInfo } from "../../controllers/lab/license.lab.js";
const labLicenseRouter = Router();
// Add or update lab info (license/profile details)
labLicenseRouter.post("/info", verifyJwt, addLabInfo);
export default labLicenseRouter;
//# sourceMappingURL=lab.license.route.js.map