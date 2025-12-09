import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function createProduct(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { productName, productDescription, productImage, productionDate, productionBatch } = req.body;
        if (!productName) {
            return res.status(400).json({
                msg: "productName is required",
            });
        }
        const manufacturer = await db.manufacturer.findUnique({
            where: { id: userId },
        });
        if (!manufacturer) {
            return res.status(404).json({ msg: "Manufacturer not found" });
        }
        const result = await db.product.create({
            data: {
                manufacturerId: manufacturer.id,
                productName,
                productDescription,
                productImage,
                productionDate,
                productionBatch,
            },
        });
        return res.status(201).json({
            msg: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("manufacturer_product_create_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function getFullProductDetails(req, res) {
    try {
        // Accept id from URL param or request body (for QR code POST payload)
        const id = req.body;
        if (!id) {
            return res.status(400).json({ msg: "Product ID is required" });
        }
        const product = await db.product.findUnique({
            where: { id },
            include: {
                manufacturer: true,
                Inventories: {
                    include: {
                        HerbInventories: {
                            include: {
                                processorInventory: {
                                    include: {
                                        processorid: true,
                                        Items: true,
                                        HerbInventories: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        return res.status(200).json({
            msg: "Product details retrieved successfully",
            data: product,
        });
    }
    catch (error) {
        logger.error("manufacturer_product_get_full_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function listProducts(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const manufacturer = await db.manufacturer.findUnique({
            where: { id: userId },
        });
        if (!manufacturer) {
            return res.status(404).json({ msg: "Manufacturer not found" });
        }
        const products = await db.product.findMany({
            where: { manufacturerId: userId },
            include: {
                Inventories: true,
            },
            orderBy: { createdAt: "desc" },
        });
        return res.status(200).json({
            msg: "Products fetched successfully",
            data: products,
        });
    }
    catch (error) {
        logger.error("manufacturer_product_list_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function getProductById(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!id) {
            return res.status(400).json({ msg: "id is required" });
        }
        const product = await db.product.findFirst({
            where: { id: id, manufacturerId: userId },
            include: {
                Inventories: {
                    include: {
                        HerbInventories: {
                            include: {
                                processorInventory: true,
                            },
                        },
                    },
                },
            },
        });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        return res.status(200).json({
            msg: "Product fetched successfully",
            data: product,
        });
    }
    catch (error) {
        logger.error("manufacturer_product_get_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function updateProduct(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        const { productName, productDescription, productImage, productionDate, productionBatch } = req.body;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!id) {
            return res.status(400).json({ msg: "id is required" });
        }
        const product = await db.product.findFirst({
            where: { id: id, manufacturerId: userId },
        });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        const updateData = {};
        if (productName !== undefined)
            updateData.productName = productName;
        if (productDescription !== undefined)
            updateData.productDescription = productDescription;
        if (productImage !== undefined)
            updateData.productImage = productImage;
        if (productionDate !== undefined)
            updateData.productionDate = productionDate;
        if (productionBatch !== undefined)
            updateData.productionBatch = productionBatch;
        const result = await db.product.update({
            where: { id: id },
            data: updateData,
        });
        return res.status(200).json({
            msg: "Product updated successfully",
            data: result,
        });
    }
    catch (error) {
        logger.error("manufacturer_product_update_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
export async function deleteProduct(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        if (!id) {
            return res.status(400).json({ msg: "id is required" });
        }
        const product = await db.product.findFirst({
            where: { id: id, manufacturerId: userId },
        });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        await db.product.delete({
            where: { id: id },
        });
        return res.status(200).json({
            msg: "Product deleted successfully",
        });
    }
    catch (error) {
        logger.error("manufacturer_product_delete_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=manufacturer.product.js.map