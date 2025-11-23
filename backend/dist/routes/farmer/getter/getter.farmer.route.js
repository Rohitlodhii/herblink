import { Router } from "express";
import { verifyJwt } from "../../../middlewares/jwt.verify.js";
import { getFarmerData, getFarmerLandInfo } from "../../../controllers/farmer/getter.farmer.js";
const FarmerGetRouter = Router();
FarmerGetRouter.get('/userdata', verifyJwt, getFarmerData);
FarmerGetRouter.get('/landinfo', verifyJwt, getFarmerLandInfo);
export default FarmerGetRouter;
//# sourceMappingURL=getter.farmer.route.js.map