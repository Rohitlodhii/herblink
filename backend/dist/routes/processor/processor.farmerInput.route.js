import { Router } from "express";
import { addFarmerInput, getFarmerInputByEventId, listFarmerInputsByInventory, } from "../../controllers/processor/processor.farmerInput.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
const processorFarmerInputRouter = Router();
processorFarmerInputRouter.post("/", verifyJwt, addFarmerInput);
processorFarmerInputRouter.get("/inventory/:inventoryId", verifyJwt, listFarmerInputsByInventory);
processorFarmerInputRouter.get("/event/:eventId", verifyJwt, getFarmerInputByEventId);
export default processorFarmerInputRouter;
//# sourceMappingURL=processor.farmerInput.route.js.map