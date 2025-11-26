import { Router } from "express";
import { loginProcessor, signUpProcessor } from "../../controllers/processor/auth.processor.js";

const processorAuthRouter = Router();

processorAuthRouter.post("/signup", signUpProcessor);
processorAuthRouter.post("/login", loginProcessor);

export default processorAuthRouter;


