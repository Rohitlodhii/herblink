import { Router } from "express";
import { verifyJwt } from "../../../middlewares/jwt.verify.js";
import { deleteFarmerLandInfo } from "../../../controllers/farmer/updates.farmer.js";


const productFarmerRouter = Router();


productFarmerRouter.post('/deletelandinfo' , verifyJwt , deleteFarmerLandInfo);

export default productFarmerRouter;