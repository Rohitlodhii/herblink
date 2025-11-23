import { Router } from "express";
import { verifyJwt } from "../../../middlewares/jwt.verify.js";
import { checkFarmerDataCompleted, getFarmerData, getFarmerLandInfo } from "../../../controllers/farmer/getter.farmer.js";


const FarmerGetRouter = Router();

FarmerGetRouter.get('/userdata' , verifyJwt , getFarmerData);
FarmerGetRouter.get('/landinfo' , verifyJwt , getFarmerLandInfo);
FarmerGetRouter.get('/checkProfileCompleted' , verifyJwt , checkFarmerDataCompleted);


export default FarmerGetRouter;