import { Router } from "express";
import { loginManufacturer, signUpManufacturer } from "../../controllers/manufacturer/auth.manufacturer.js";

const manufacturerAuthRouter = Router();

manufacturerAuthRouter.post("/signup", signUpManufacturer);
manufacturerAuthRouter.post("/login", loginManufacturer);

export default manufacturerAuthRouter;

