import { Router } from "express";
import {
  getProcessingPlantInfo,
  upsertProcessingPlantInfo,
} from "../../controllers/processor/processor.plant.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";

const processorPlantRouter = Router();

processorPlantRouter.post("/", verifyJwt, upsertProcessingPlantInfo);
processorPlantRouter.get("/", verifyJwt, getProcessingPlantInfo);

export default processorPlantRouter;


