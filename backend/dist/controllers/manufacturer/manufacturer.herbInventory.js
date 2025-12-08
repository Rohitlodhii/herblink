import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function createHerbInventory(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { processorInventoryId, quantityReceived } = req.body;
        if (!processorInventoryId || !quantityReceived) {
            return res.status(400).json({
                msg: "processorInventoryId and quantityReceived are required",
            });
        }
        // Verify processorInventory exists
        const processorInventory = await db.processorInventory.findUnique({
            where: { id: processorInventoryId },
        });
        if (!processorInventory) {
            return res.status(404).json({ msg: "ProcessorInventory not found" });
        }
        const result = await db.herbInventory.create({
            data: {
                processorInventoryId,
                quantityReceived,
            },
        });
        return res.status(201).json({
            msg: "Herb inventory created successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("manufacturer_herbinventory_create_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listHerbInventories(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        // Get all herb inventories that are linked to products owned by this manufacturer
        const manufacturer = await db.manufacturer.findUnique({
            where: { id: userId },
            include: {
                products: {
                    include: {
                        Inventories: {
                            include: {
                                herbInventory: {
                                    include: {
                                        processorInventory: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!manufacturer) {
            return res.status(404).json({ msg: "Manufacturer not found" });
        }
        // Extract all herb inventories from products
        const herbInventories = manufacturer.products.flatMap((product) => product.Inventories.map((inventory) => inventory.herbInventory).filter(Boolean));
        return res.status(200).json({
            msg: "Herb inventories fetched successfully",
            data: herbInventories,
        });
    }
    catch (error) {
        logger.error("manufacturer_herbinventory_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function getHerbInventoryById(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!id) {
            return res.status(400).json({ msg: "id is required" });
        }
        const herbInventory = await db.herbInventory.findUnique({
            where: { id: id },
            include: {
                processorInventory: true,
                productInventory: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!herbInventory) {
            return res.status(404).json({ msg: "Herb inventory not found" });
        }
        // Verify it's linked to a product owned by this manufacturer
        if (herbInventory.productInventory?.product.manufacturerId !== userId) {
            return res.status(403).json({
                msg: "You are not authorized to view this herb inventory",
            });
        }
        return res.status(200).json({
            msg: "Herb inventory fetched successfully",
            data: herbInventory,
        });
    }
    catch (error) {
        logger.error("manufacturer_herbinventory_get_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function updateHerbInventory(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        const { quantityReceived, processorInventoryId } = req.body;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!id) {
            return res.status(400).json({ msg: "id is required" });
        }
        const herbInventory = await db.herbInventory.findUnique({
            where: { id: id },
            include: {
                productInventory: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!herbInventory) {
            return res.status(404).json({ msg: "Herb inventory not found" });
        }
        // Verify it's linked to a product owned by this manufacturer
        if (herbInventory.productInventory?.product.manufacturerId !== userId) {
            return res.status(403).json({
                msg: "You are not authorized to update this herb inventory",
            });
        }
        const updateData = {};
        if (quantityReceived !== undefined)
            updateData.quantityReceived = quantityReceived;
        if (processorInventoryId !== undefined) {
            // Verify processorInventory exists
            const processorInventory = await db.processorInventory.findUnique({
                where: { id: processorInventoryId },
            });
            if (!processorInventory) {
                return res.status(404).json({ msg: "ProcessorInventory not found" });
            }
            updateData.processorInventoryId = processorInventoryId;
        }
        const result = await db.herbInventory.update({
            where: { id: id },
            data: updateData,
        });
        return res.status(200).json({
            msg: "Herb inventory updated successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("manufacturer_herbinventory_update_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=manufacturer.herbInventory.js.map