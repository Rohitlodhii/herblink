import { Router } from "express";
import labAuthRouter from "./lab.auth.route.js";
import labLicenseRouter from "./lab.license.route.js";
import labWorkerRouter from "./lab.worker.route.js";
import labProcessorInputRouter from "./lab.processorInput.route.js";

const labRouter = Router();


labRouter.use('/auth' , labAuthRouter)
labRouter.use('/license' , labLicenseRouter)
labRouter.use('/worker', labWorkerRouter)
labRouter.use('/processor-input', labProcessorInputRouter)


export default labRouter;