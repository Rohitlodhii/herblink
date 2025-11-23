import { Router } from "express";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
import addLabInfo from "../../controllers/lab/license.lab.js";


const labLicenseRouter = Router();

labLicenseRouter.post('/createlicense' , verifyJwt , addLabInfo);


export default labLicenseRouter;
