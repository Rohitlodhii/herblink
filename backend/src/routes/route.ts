import { Router } from "express";
import farmerRouter from "./farmer/farmer.route.js";

const apiRouter = Router();

apiRouter.use('/farmer' , farmerRouter);


export default apiRouter;