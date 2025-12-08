import { Router } from "express";
import {
  createHerbInventory,
  getHerbInventoryById,
  listHerbInventories,
  updateHerbInventory,
} from "../../controllers/manufacturer/manufacturer.herbInventory.js";
import { verifyJwt } from "../../middlewares/jwt.verify.js";

const manufacturerHerbInventoryRouter = Router();

manufacturerHerbInventoryRouter.post("/", verifyJwt, createHerbInventory);
manufacturerHerbInventoryRouter.get("/", verifyJwt, listHerbInventories);
manufacturerHerbInventoryRouter.get("/:id", verifyJwt, getHerbInventoryById);
manufacturerHerbInventoryRouter.put("/:id", verifyJwt, updateHerbInventory);

export default manufacturerHerbInventoryRouter;

