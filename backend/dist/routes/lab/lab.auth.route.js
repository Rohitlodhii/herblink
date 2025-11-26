import { Router } from "express";
import { loginLab, signUpLab } from "../../controllers/lab/auth.lab.js";
const labAuthRouter = Router();
labAuthRouter.post('/signup', signUpLab);
labAuthRouter.post('/login', loginLab);
export default labAuthRouter;
//# sourceMappingURL=lab.auth.route.js.map