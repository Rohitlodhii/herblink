import { Router } from "express";
import farmerRouter from "./farmer/farmer.route.js";
import labRouter from "./lab/lab.routes.js";
import processorRouter from "./processor/processor.routes.js";
import manufacturerRouter from "./manufacturer/manufacturer.routes.js";
const apiRouter = Router();
apiRouter.use('/farmer', farmerRouter);
apiRouter.use('/lab', labRouter);
apiRouter.use('/processor', processorRouter);
apiRouter.use('/manufacturer', manufacturerRouter);
export default apiRouter;
//# sourceMappingURL=route.js.map