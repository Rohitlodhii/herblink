import { Router } from "express";
import farmerRouter from "./farmer/farmer.route.js";
import labRouter from "./lab/lab.routes.js";
import processorRouter from "./processor/processor.routes.js";
import manufacturerRouter from "./manufacturer/manufacturer.routes.js";
import adminRouter from "./admin/farmer.admin.route.js";
import complaintRouter from "./complaint.route.js";
import { getFullProductDetails } from "../controllers/manufacturer/manufacturer.product.js";
const apiRouter = Router();
apiRouter.use('/farmer', farmerRouter);
apiRouter.use('/lab', labRouter);
apiRouter.use('/processor', processorRouter);
apiRouter.use('/manufacturer', manufacturerRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/complaints', complaintRouter);
apiRouter.post('/scanqr', getFullProductDetails);
export default apiRouter;
//# sourceMappingURL=route.js.map