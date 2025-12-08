import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function addLabProcessorInput(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { processorInventoryId, reportpath } = req.body;
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
                reportpath,
            },
        });
        return res.status(201).json({
            msg: "Lab processor input created successfully",
            data: input,
        });
    }
    catch (error) {
        logger.error("lab_processorInput_add_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listLabProcessorInputs(req, res) {
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
    }
    catch (error) {
        logger.error("lab_processorInput_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listLabProcessorInputsWithoutReport(req, res) {
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
    }
    catch (error) {
        logger.error("lab_processorInput_pending_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=lab.processorInput.js.map