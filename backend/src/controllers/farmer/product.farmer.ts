import { Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";

export async function addHerb(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const {
      herbname,
      harvestDate,
      coordinates,
      pesticidesUsed = false,
      quantity,
      desc,
    } = req.body;

    if (!herbname || !harvestDate || !coordinates || !quantity || !desc) {
      return res.status(400).json({
        msg: "herbname, harvestDate, coordinates, quantity and desc are required",
      });
    }

    const herb = await db.herbData.create({
      data: {
        herbname,
        harvestDate,
        coordinates,
        pesticidesUsed,
        quantity,
        desc,
        farmerID: userId,
      },
    });

    return res.status(201).json({
      msg: "Herb added successfully",
      data: herb,
    });
  } catch (error) {
    logger.error("farmer_add_herb_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ msg: "Internal Server error" });
  }
}