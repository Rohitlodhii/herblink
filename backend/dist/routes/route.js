import { Router } from "express";
import farmerRouter from "./farmer/farmer.route.js";
import labRouter from "./lab/lab.routes.js";
import processorRouter from "./processor/processor.routes.js";
const apiRouter = Router();
apiRouter.use('/farmer', farmerRouter);
apiRouter.use('/lab', labRouter);
apiRouter.use('/processor', processorRouter);
export default apiRouter;
//# sourceMappingURL=route.js.map