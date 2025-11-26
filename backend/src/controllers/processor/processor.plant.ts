import { Request, Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";

export async function upsertProcessingPlantInfo(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const { estb, GSTIN, Storage, herbs } = req.body;

    const processor = await db.processor.findUnique({
      where: { id: userId },
    });

    if (!processor) {
      return res.status(404).json({ msg: "Processor not found" });
    }

    const existing = await db.processingPlantInfo.findFirst({
      where: { processorID: processor.id },
    });

    const data = {
      estb,
      GSTIN,
      Storage,
      herbs,
      processorID: processor.id,
    };

    const result = existing
      ? await db.processingPlantInfo.update({
          where: { id: existing.id },
          data,
        })
      : await db.processingPlantInfo.create({ data });

    return res.status(200).json({
      msg: "Processing plant info saved successfully",
      data: result,
    });
  } catch (error) {
    logger.error("processor_plantinfo_upsert_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}

export async function getProcessingPlantInfo(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const processor = await db.processor.findUnique({
      where: { id: userId },
      include: {
        plantInfo: true,
      },
    });

    if (!processor || !processor.plantInfo) {
      return res.status(404).json({ msg: "Plant info not found" });
    }

    return res.status(200).json({
      msg: "Processing plant info fetched successfully",
      data: processor.plantInfo,
    });
  } catch (error) {
    logger.error("processor_plantinfo_get_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}


