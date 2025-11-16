import { Router } from "express";
import { FarmerLogin, FarmerSignUp, FarmerSignUpVerifyOtp } from "../../../controllers/farmer/auth.farmer.js";
const farmerAuthRouter = Router();
farmerAuthRouter.get('/health', (req, res) => {
    res.status(200).json({
        msg: "Server up and running"
    });
});
farmerAuthRouter.post('/signup', FarmerSignUp);
farmerAuthRouter.post('/verifyOtp', FarmerSignUpVerifyOtp);
farmerAuthRouter.post('/login', FarmerLogin);
export default farmerAuthRouter;
//# sourceMappingURL=farmer.auth.route.js.map