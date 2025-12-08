import { Router } from "express";
import manufacturerAuthRouter from "./manufacturer.auth.route.js";
import manufacturerProductRouter from "./manufacturer.product.route.js";
import manufacturerProductInventoryRouter from "./manufacturer.productInventory.route.js";
import manufacturerHerbInventoryRouter from "./manufacturer.herbInventory.route.js";
const manufacturerRouter = Router();
manufacturerRouter.use("/auth", manufacturerAuthRouter);
manufacturerRouter.use("/product", manufacturerProductRouter);
manufacturerRouter.use("/product-inventory", manufacturerProductInventoryRouter);
manufacturerRouter.use("/herb-inventory", manufacturerHerbInventoryRouter);
export default manufacturerRouter;
//# sourceMappingURL=manufacturer.routes.js.map