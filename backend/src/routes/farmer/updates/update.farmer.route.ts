import { Router } from "express";
import { verifyJwt } from "../../../middlewares/jwt.verify.js";
import { deleteFarmerLandInfo } from "../../../controllers/farmer/updates.farmer.js";


const updateFarmerRouter = Router();


updateFarmerRouter.post('/deletelandinfo' , verifyJwt , deleteFarmerLandInfo);

export default updateFarmerRouter;