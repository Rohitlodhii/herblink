import { Router } from "express";
import farmerAuthRouter from "./auth/farmer.auth.route.js";
import farmerLicenseRouter from "./license/farmer.license.route.js";
import FarmerGetRouter from "./getter/getter.farmer.route.js";
import updateFarmerRouter from "./updates/update.farmer.route.js";
import productFarmerRouter from "./product/product.farmer.js";

const farmerRouter = Router();


farmerRouter.use('/auth' , farmerAuthRouter);
farmerRouter.use('/license' , farmerLicenseRouter);
farmerRouter.use('/get' , FarmerGetRouter);
farmerRouter.use('/update' , updateFarmerRouter);
farmerRouter.use('/add' , productFarmerRouter)
export default farmerRouter;