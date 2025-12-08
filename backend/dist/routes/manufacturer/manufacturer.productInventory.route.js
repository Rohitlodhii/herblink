import { Router } from "express";
import { createProductInventory, deleteProductInventory, getProductInventoryById, listProductInventories, updateProductInventory, } from "../../controllers/manufacturer/manufacturer.productInventory.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
const manufacturerProductInventoryRouter = Router();
manufacturerProductInventoryRouter.post("/", verifyJwt, createProductInventory);
manufacturerProductInventoryRouter.get("/product/:productId", verifyJwt, listProductInventories);
manufacturerProductInventoryRouter.get("/:id", verifyJwt, getProductInventoryById);
manufacturerProductInventoryRouter.put("/:id", verifyJwt, updateProductInventory);
manufacturerProductInventoryRouter.delete("/:id", verifyJwt, deleteProductInventory);
export default manufacturerProductInventoryRouter;
//# sourceMappingURL=manufacturer.productInventory.route.js.map