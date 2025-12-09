import { Router } from "express";
import { createInventory, getInventoryById, listInventories, updateInventory, } from "../../controllers/processor/processor.inventory.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
const processorInventoryRouter = Router();
processorInventoryRouter.post("/", verifyJwt, createInventory);
processorInventoryRouter.get("/", verifyJwt, listInventories);
processorInventoryRouter.get("/:id", verifyJwt, getInventoryById);
processorInventoryRouter.put("/:id", verifyJwt, updateInventory);
export default processorInventoryRouter;
//# sourceMappingURL=processor.inventory.route.js.map