import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function addFarmerInput(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { inventoryID, quantity, eventId, specie } = req.body;
        if (!inventoryID || !quantity || !eventId) {
            return res.status(400).json({
                msg: "inventoryID, quantity and eventId are required",
            });
        }
        const inventory = await db.processorInventory.findFirst({
            where: { id: inventoryID, processorID: userId },
        });
        if (!inventory) {
            return res.status(404).json({ msg: "Inventory not found for processor" });
        }
        const result = await db.processorFarmerInput.create({
            data: {
                inventoryID,
                quantity,
                eventId,
                specie,
            },
        });
        return res.status(201).json({
            msg: "Farmer input added successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("processor_farmerinput_add_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listFarmerInputsByInventory(req, res) {
    try {
        const userId = req.userId;
        const { inventoryId } = req.params;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!inventoryId) {
            return res.status(400).json({ msg: "inventoryId is required" });
        }
        const inventory = await db.processorInventory.findFirst({
            where: { id: inventoryId, processorID: userId },
        });
        if (!inventory) {
            return res.status(404).json({ msg: "Inventory not found for processor" });
        }
        const items = await db.processorFarmerInput.findMany({
            where: { inventoryID: inventoryId },
            orderBy: { createdAt: "desc" },
        });
        return res.status(200).json({
            msg: "Farmer inputs fetched successfully",
            data: items,
        });
    }
    catch (error) {
        logger.error("processor_farmerinput_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function getFarmerInputByEventId(req, res) {
    try {
        const userId = req.userId;
        const { eventId } = req.params;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!eventId) {
            return res.status(400).json({ msg: "eventId is required" });
        }
        const item = await db.processorFarmerInput.findFirst({
            where: { eventId: eventId },
        });
        if (!item) {
            return res.status(404).json({ msg: "Farmer input not found" });
        }
        // ensure the inventory belongs to processor
        const inventory = await db.processorInventory.findFirst({
            where: { id: item.inventoryID, processorID: userId },
        });
        if (!inventory) {
            return res.status(403).json({
                msg: "You are not authorized to view this farmer input",
            });
        }
        return res.status(200).json({
            msg: "Farmer input fetched successfully",
            data: item,
        });
    }
    catch (error) {
        logger.error("processor_farmerinput_get_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=processor.farmerInput.js.map