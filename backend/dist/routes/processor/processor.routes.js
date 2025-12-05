import { Router } from "express";
import processorAuthRouter from "./processor.auth.route.js";
import processorPlantRouter from "./processor.plant.route.js";
import processorInventoryRouter from "./processor.inventory.route.js";
import processorFarmerInputRouter from "./processor.farmerInput.route.js";
const processorRouter = Router();
processorRouter.use("/auth", processorAuthRouter);
processorRouter.use("/plant", processorPlantRouter);
processorRouter.use("/inventory", processorInventoryRouter);
processorRouter.use("/farmer-input", processorFarmerInputRouter);
export default processorRouter;
//# sourceMappingURL=processor.routes.js.map