import { Router } from "express";
import db from "../../config/db.js";
const adminRouter = Router();
// Farmers
adminRouter.get("/farmers/not-verified", async (_req, res) => {
    try {
        const farmers = await db.farmer.findMany({
            where: { isVerified: false },
            select: {
                id: true,
                fullName: true,
                mobileNumber: true,
                farmerID: true,
                farmerType: true,
                status: true,
                isProfileCompleted: true,
                createdAt: true,
            },
        });
        return res.status(200).json({ success: true, count: farmers.length, farmers });
    }
    catch (error) {
        console.error("Error fetching unverified farmers:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/farmers/:id/verify", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "farmer id is required" });
        }
        const farmer = await db.farmer.findUnique({ where: { id } });
        if (!farmer) {
            return res.status(404).json({ success: false, message: "Farmer not found" });
        }
        const updated = await db.farmer.update({
            where: { id },
            data: { isVerified: true, status: "verified" },
        });
        return res.status(200).json({ success: true, message: "Farmer verified", farmer: updated });
    }
    catch (error) {
        console.error("Error verifying farmer:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/farmers/:id/reject", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "farmer id is required" });
        }
        const farmer = await db.farmer.findUnique({ where: { id } });
        if (!farmer) {
            return res.status(404).json({ success: false, message: "Farmer not found" });
        }
        const updated = await db.farmer.update({
            where: { id },
            data: { isVerified: false, status: "rejected" },
        });
        return res.status(200).json({ success: true, message: "Farmer rejected", farmer: updated });
    }
    catch (error) {
        console.error("Error rejecting farmer:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
// Labs
adminRouter.get("/labs/not-verified", async (_req, res) => {
    try {
        const labs = await db.lab.findMany({
            where: { isVerified: false },
            select: {
                id: true,
                email: true,
                labId: true,
                isVerified: true,
                labinfo: true,
            },
        });
        return res.status(200).json({ success: true, count: labs.length, labs });
    }
    catch (error) {
        console.error("Error fetching unverified labs:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/labs/:id/verify", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "lab id is required" });
        }
        const lab = await db.lab.findUnique({ where: { id } });
        if (!lab) {
            return res.status(404).json({ success: false, message: "Lab not found" });
        }
        const updated = await db.lab.update({
            where: { id },
            data: { isVerified: true },
        });
        return res.status(200).json({ success: true, message: "Lab verified", lab: updated });
    }
    catch (error) {
        console.error("Error verifying lab:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/labs/:id/reject", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "lab id is required" });
        }
        const lab = await db.lab.findUnique({ where: { id } });
        if (!lab) {
            return res.status(404).json({ success: false, message: "Lab not found" });
        }
        const updated = await db.lab.update({
            where: { id },
            data: { isVerified: false },
        });
        return res.status(200).json({ success: true, message: "Lab rejected", lab: updated });
    }
    catch (error) {
        console.error("Error rejecting lab:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
// Processor
adminRouter.get("/processors/not-verified", async (_req, res) => {
    try {
        const processors = await db.processor.findMany({
            where: { isVerified: false },
            select: {
                id: true,
                email: true,
                processorId: true,
                name: true,
                organization: true,
                status: true,
                createdAt: true,
            },
        });
        return res.status(200).json({ success: true, count: processors.length, processors });
    }
    catch (error) {
        console.error("Error fetching unverified processors:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/processors/:id/verify", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "processor id is required" });
        }
        const processor = await db.processor.findUnique({ where: { id } });
        if (!processor) {
            return res.status(404).json({ success: false, message: "Processor not found" });
        }
        const updated = await db.processor.update({
            where: { id },
            data: { isVerified: true, status: "verified" },
        });
        return res.status(200).json({ success: true, message: "Processor verified", processor: updated });
    }
    catch (error) {
        console.error("Error verifying processor:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/processors/:id/reject", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "processor id is required" });
        }
        const processor = await db.processor.findUnique({ where: { id } });
        if (!processor) {
            return res.status(404).json({ success: false, message: "Processor not found" });
        }
        const updated = await db.processor.update({
            where: { id },
            data: { isVerified: false, status: "rejected" },
        });
        return res.status(200).json({ success: true, message: "Processor rejected", processor: updated });
    }
    catch (error) {
        console.error("Error rejecting processor:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
// Manufacturer
adminRouter.get("/manufacturers/not-verified", async (_req, res) => {
    try {
        const manufacturers = await db.manufacturer.findMany({
            where: { isVerified: false },
            select: {
                id: true,
                email: true,
                manufacturerId: true,
                name: true,
                organization: true,
                status: true,
                createdAt: true,
            },
        });
        return res.status(200).json({ success: true, count: manufacturers.length, manufacturers });
    }
    catch (error) {
        console.error("Error fetching unverified manufacturers:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/manufacturers/:id/verify", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "manufacturer id is required" });
        }
        const manufacturer = await db.manufacturer.findUnique({ where: { id } });
        if (!manufacturer) {
            return res.status(404).json({ success: false, message: "Manufacturer not found" });
        }
        const updated = await db.manufacturer.update({
            where: { id },
            data: { isVerified: true, status: "verified" },
        });
        return res.status(200).json({ success: true, message: "Manufacturer verified", manufacturer: updated });
    }
    catch (error) {
        console.error("Error verifying manufacturer:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
adminRouter.post("/manufacturers/:id/reject", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "manufacturer id is required" });
        }
        const manufacturer = await db.manufacturer.findUnique({ where: { id } });
        if (!manufacturer) {
            return res.status(404).json({ success: false, message: "Manufacturer not found" });
        }
        const updated = await db.manufacturer.update({
            where: { id },
            data: { isVerified: false, status: "rejected" },
        });
        return res.status(200).json({ success: true, message: "Manufacturer rejected", manufacturer: updated });
    }
    catch (error) {
        console.error("Error rejecting manufacturer:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
// Products (deep details by product id)
adminRouter.get("/products/:id/details", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "product id is required" });
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
                                        LabProcessorInputs: true,
                                    },
                                },
                                productInventory: true,
                            },
                        },
                    },
                },
            },
        });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Product details retrieved successfully",
            product,
        });
    }
    catch (error) {
        console.error("Error fetching product details:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
export default adminRouter;
//# sourceMappingURL=farmer.admin.route.js.map