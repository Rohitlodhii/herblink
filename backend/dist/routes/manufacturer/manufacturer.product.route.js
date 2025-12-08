import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct, } from "../../controllers/manufacturer/manufacturer.product.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";
const manufacturerProductRouter = Router();
manufacturerProductRouter.post("/", verifyJwt, createProduct);
manufacturerProductRouter.get("/", verifyJwt, listProducts);
manufacturerProductRouter.get("/:id", verifyJwt, getProductById);
manufacturerProductRouter.put("/:id", verifyJwt, updateProduct);
manufacturerProductRouter.delete("/:id", verifyJwt, deleteProduct);
export default manufacturerProductRouter;
//# sourceMappingURL=manufacturer.product.route.js.map