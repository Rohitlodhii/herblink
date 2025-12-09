import { Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";

export async function addLabProcessorInput(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const { processorInventoryId, reportpath, description, isDone } = req.body;

    if (!processorInventoryId) {
      return res
        .status(400)
        .json({ msg: "processorInventoryId is required" });
    }

    const lab = await db.lab.findUnique({ where: { id: userId } });
    if (!lab) {
      return res.status(404).json({ msg: "Lab not found" });
    }

    const inventory = await db.processorInventory.findUnique({
      where: { id: processorInventoryId },
    });
    if (!inventory) {
      return res.status(404).json({ msg: "Processor inventory not found" });
    }

    const input = await db.labProcessorInput.create({
      data: {
        labId: lab.id,
        processorInventoryId,
        reportpath: reportpath || null,
        description: description || null,
        isDone: isDone || false,
      },
    });

    return res.status(201).json({
      msg: "Lab processor input created successfully",
      data: input,
    });
  } catch (error) {
    logger.error("lab_processorInput_add_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function listLabProcessorInputs(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const items = await db.labProcessorInput.findMany({
      where: { labId: userId },
      orderBy: { createdAt: "desc" },
      include: {
        processorInventory: true,
      },
    });

    return res.status(200).json({
      msg: "Lab processor inputs fetched successfully",
      data: items,
    });
  } catch (error) {
    logger.error("lab_processorInput_list_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function listLabProcessorInputsWithoutReport(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const items = await db.labProcessorInput.findMany({
      where: {
        labId: userId,
        OR: [{ reportpath: null }, { reportpath: "" }],
      },
      orderBy: { createdAt: "desc" },
      include: {
        processorInventory: true,
      },
    });

    return res.status(200).json({
      msg: "Lab processor inputs without report fetched successfully",
      data: items,
    });
  } catch (error) {
    logger.error("lab_processorInput_pending_list_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function updateLabProcessorInput(
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

    const lab = await db.lab.findUnique({ where: { id: userId } });
    if (!lab) {
      return res.status(404).json({ msg: "Lab not found" });
    }

    // Check if the lab processor input exists and belongs to this lab
    const existingInput = await db.labProcessorInput.findFirst({
      where: { id: id as string, labId: userId },
    });

    if (!existingInput) {
      return res.status(404).json({ msg: "Lab processor input not found" });
    }

    const { reportpath, description, isDone } = req.body;

    // Build update data object
    const updateData: any = {};
    if (reportpath !== undefined) updateData.reportpath = reportpath;
    if (description !== undefined) updateData.description = description;
    if (isDone !== undefined) updateData.isDone = isDone;

    const updatedInput = await db.labProcessorInput.update({
      where: { id: id as string },
      data: updateData,
    });

    return res.status(200).json({
      msg: "Lab processor input updated successfully",
      data: updatedInput,
    });
  } catch (error) {
    logger.error("lab_processorInput_update_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

