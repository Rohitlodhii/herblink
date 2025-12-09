import { Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";

export async function createProductInventory(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const { productId, HerbName } = req.body;

    if (!productId || !HerbName) {
      return res.status(400).json({
        msg: "productId and HerbName are required",
      });
    }

    // Verify product belongs to manufacturer
    const product = await db.product.findFirst({
      where: { id: productId, manufacturerId: userId },
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found for manufacturer" });
    }

    const result = await db.productInventory.create({
      data: {
        productId,
        HerbName,
      },
    });

    return res.status(201).json({
      msg: "Product inventory created successfully",
      data: result,
    });
  } catch (error) {
    logger.error("manufacturer_productinventory_create_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function listProductInventories(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!productId) {
      return res.status(400).json({ msg: "productId is required" });
    }

    // Verify product belongs to manufacturer
    const product = await db.product.findFirst({
      where: { id: productId as string, manufacturerId: userId },
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found for manufacturer" });
    }

    const inventories = await db.productInventory.findMany({
      where: { productId: productId as string },
      include: {
        HerbInventories: {
          include: {
            processorInventory: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      msg: "Product inventories fetched successfully",
      data: inventories,
    });
  } catch (error) {
    logger.error("manufacturer_productinventory_list_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function getProductInventoryById(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }

    const inventory = await db.productInventory.findUnique({
      where: { id: id as string },
      include: {
        product: true,
        HerbInventories: {
          include: {
            processorInventory: true,
          },
        },
      },
    });

    if (!inventory) {
      return res.status(404).json({ msg: "Product inventory not found" });
    }

    // Verify product belongs to manufacturer
    if (inventory.product.manufacturerId !== userId) {
      return res.status(403).json({
        msg: "You are not authorized to view this product inventory",
      });
    }

    return res.status(200).json({
      msg: "Product inventory fetched successfully",
      data: inventory,
    });
  } catch (error) {
    logger.error("manufacturer_productinventory_get_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function updateProductInventory(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const { HerbName } = req.body;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }

    const inventory = await db.productInventory.findUnique({
      where: { id: id as string },
      include: { product: true },
    });

    if (!inventory) {
      return res.status(404).json({ msg: "Product inventory not found" });
    }

    // Verify product belongs to manufacturer
    if (inventory.product.manufacturerId !== userId) {
      return res.status(403).json({
        msg: "You are not authorized to update this product inventory",
      });
    }

    const updateData: {
      HerbName?: string;
    } = {};

    if (HerbName !== undefined) updateData.HerbName = HerbName;

    const result = await db.productInventory.update({
      where: { id: id as string },
      data: updateData,
    });

    return res.status(200).json({
      msg: "Product inventory updated successfully",
      data: result,
    });
  } catch (error) {
    logger.error("manufacturer_productinventory_update_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function deleteProductInventory(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }

    const inventory = await db.productInventory.findUnique({
      where: { id: id as string },
      include: { product: true },
    });

    if (!inventory) {
      return res.status(404).json({ msg: "Product inventory not found" });
    }

    // Verify product belongs to manufacturer
    if (inventory.product.manufacturerId !== userId) {
      return res.status(403).json({
        msg: "You are not authorized to delete this product inventory",
      });
    }

    await db.productInventory.delete({
      where: { id: id as string },
    });

    return res.status(200).json({
      msg: "Product inventory deleted successfully",
    });
  } catch (error) {
    logger.error("manufacturer_productinventory_delete_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

