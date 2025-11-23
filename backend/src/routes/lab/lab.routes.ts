import { Router } from "express";
import labAuthRouter from "./lab.auth.route.js";

const labRouter = Router();


labRouter.use('/auth' , labAuthRouter)


export default labRouter;