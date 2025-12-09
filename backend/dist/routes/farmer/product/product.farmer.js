import { Router } from "express";
import { verifyJwt } from "../../../middlewares/jwt.verify.js";
import { addHerb } from "../../../controllers/farmer/product.farmer.js";
const productFarmerRouter = Router();
productFarmerRouter.post('/herbdata', verifyJwt, addHerb);
export default productFarmerRouter;
//# sourceMappingURL=product.farmer.js.map