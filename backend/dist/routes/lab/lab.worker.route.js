import { Router } from "express";
import { addLabWorker } from "../../controllers/lab/lab.worker.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
const labWorkerRouter = Router();
labWorkerRouter.post("/", verifyJwt, addLabWorker);
export default labWorkerRouter;
//# sourceMappingURL=lab.worker.route.js.map