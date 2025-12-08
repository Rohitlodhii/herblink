import { Router } from "express";
import {
  addLabProcessorInput,
  listLabProcessorInputs,
  listLabProcessorInputsWithoutReport,
} from "../../controllers/lab/lab.processorInput.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";

const labProcessorInputRouter = Router();

labProcessorInputRouter.post("/", verifyJwt, addLabProcessorInput);
labProcessorInputRouter.get("/", verifyJwt, listLabProcessorInputs);
labProcessorInputRouter.get(
  "/pending-report",
  verifyJwt,
  listLabProcessorInputsWithoutReport
);

export default labProcessorInputRouter;

