import { Request, Response } from "express";
import db from "../../config/db.js";
import logger from "../../config/logger.js";

export async function createComplaint(req: Request, res: Response) {
  try {
    const { name, complaintType, complaintImage, description } = req.body;

    if (!name || !complaintType) {
      return res.status(400).json({
        success: false,
        message: "name and complaintType are required",
      });
    }

    const complaint = await db.complaint.create({
      data: {
        name,
        complaintType,
        complaintImage,
        description,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Complaint created successfully",
      data: complaint,
    });
  } catch (error) {
    logger.error("complaint_create_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function listComplaints(_req: Request, res: Response) {
  try {
    const complaints = await db.complaint.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints,
    });
  } catch (error) {
    logger.error("complaint_list_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getComplaintById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "complaint id is required" });
    }

    const complaint = await db.complaint.findUnique({ where: { id } });

    if (!complaint) {
      return res.status(404).json({ success: false, message: "Complaint not found" });
    }

    return res.status(200).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    logger.error("complaint_get_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

