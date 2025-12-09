import { Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";

export async function createInventory(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const {
      inventoryName,
      assignedGrade,
      specie,
      moisture,
      soilType,
      WaterType,
      Season,
      Location,
    } = req.body;

    // Validate required fields
    if (!inventoryName || !assignedGrade || !specie) {
      return res.status(400).json({ 
        msg: "inventoryName, assignedGrade, and specie are required" 
      });
    }

    const processor = await db.processor.findUnique({
      where: { id: userId },
    });

    if (!processor) {
      return res.status(404).json({ msg: "Processor not found" });
    }

    const result = await db.processorInventory.create({
      data: {
        inventoryName,
        assignedGrade,
        specie,
        moisture: moisture || null,
        soilType: soilType || null,
        WaterType: WaterType || null,
        Season: Season || null,
        Location: Location || null,
        processorID: processor.id,
        // Set default values for required fields
        finalQuantity: "",
        sendedToLab: "",
      },
    });

    return res.status(201).json({
      msg: "Inventory created successfully",
      data: result,
    });
  } catch (error) {
    logger.error("processor_inventory_create_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function listInventories(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const inventories = await db.processorInventory.findMany({
      where: { processorID: userId },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      msg: "Inventories fetched successfully",
      data: inventories,
    });
  } catch (error) {
    logger.error("processor_inventory_list_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function getInventoryById(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }

    const inventory = await db.processorInventory.findFirst({
      where: { id: id as string, processorID: userId },
      include: {
        Items: true,
      },
    });

    if (!inventory) {
      return res.status(404).json({ msg: "Inventory not found" });
    }

    return res.status(200).json({
      msg: "Inventory fetched successfully",
      data: inventory,
    });
  } catch (error) {
    logger.error("processor_inventory_get_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function updateInventory(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!id) {
      return res.status(400).json({ msg: "id is required" });
    }

    const processor = await db.processor.findUnique({
      where: { id: userId },
    });

    if (!processor) {
      return res.status(404).json({ msg: "Processor not found" });
    }

    const {
      inventoryName,
      assignedGrade,
      processinglist,
      specie,
      finalQuantity,
      sendedToLab,
      isprocessingDone,
      moisture,
      soilType,
      WaterType,
      Season,
      Location,
    } = req.body;

    // Check if inventory exists and belongs to the processor
    const existingInventory = await db.processorInventory.findFirst({
      where: { id: id as string, processorID: userId },
    });

    if (!existingInventory) {
      // Create new inventory if it doesn't exist
      const result = await db.processorInventory.create({
        data: {
          id: id as string,
          inventoryName: inventoryName || `Inventory ${id}`,
          assignedGrade: assignedGrade || "",
          processinglist: processinglist || null,
          specie: specie || "",
          finalQuantity: finalQuantity || "",
          sendedToLab: sendedToLab || "",
          isprocessingDone: isprocessingDone || false,
          moisture: moisture || null,
          soilType: soilType || null,
          WaterType: WaterType || null,
          Season: Season || null,
          Location: Location || null,
          processorID: processor.id,
        },
      });

      return res.status(201).json({
        msg: "Inventory created successfully",
        data: result,
      });
    }

    // Update existing inventory
    const updateData: any = {};
    if (inventoryName !== undefined) updateData.inventoryName = inventoryName;
    if (assignedGrade !== undefined) updateData.assignedGrade = assignedGrade;
    if (processinglist !== undefined) updateData.processinglist = processinglist;
    if (specie !== undefined) updateData.specie = specie;
    if (finalQuantity !== undefined) updateData.finalQuantity = finalQuantity;
    if (sendedToLab !== undefined) updateData.sendedToLab = sendedToLab;
    if (isprocessingDone !== undefined) updateData.isprocessingDone = isprocessingDone;
    if (moisture !== undefined) updateData.moisture = moisture;
    if (soilType !== undefined) updateData.soilType = soilType;
    if (WaterType !== undefined) updateData.WaterType = WaterType;
    if (Season !== undefined) updateData.Season = Season;
    if (Location !== undefined) updateData.Location = Location;

    const result = await db.processorInventory.update({
      where: { id: id as string },
      data: updateData,
    });

    return res.status(200).json({
      msg: "Inventory updated successfully",
      data: result,
    });
  } catch (error) {
    logger.error("processor_inventory_update_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

