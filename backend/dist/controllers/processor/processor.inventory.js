import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function createInventory(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { inventoryName, assignedGrade, processinglist, specie, finalQuantity, sendedToLab, } = req.body;
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
                processinglist,
                specie,
                finalQuantity,
                sendedToLab,
                processorID: processor.id,
            },
        });
        return res.status(201).json({
            msg: "Inventory created successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("processor_inventory_create_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listInventories(req, res) {
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
    }
    catch (error) {
        logger.error("processor_inventory_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function getInventoryById(req, res) {
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
            where: { id: id, processorID: userId },
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
    }
    catch (error) {
        logger.error("processor_inventory_get_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=processor.inventory.js.map