import { Router } from "express";
import db from "../../config/db.js";
const farmerAdminRouter = Router();
farmerAdminRouter.get('/notverified', async (req, res) => {
    try {
        const farmers = await db.farmer.findMany({
            where: {
                isVerified: false,
            },
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
        return res.status(200).json({
            success: true,
            count: farmers.length,
            farmers,
        });
    }
    catch (error) {
        console.error("Error fetching unverified farmers:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
farmerAdminRouter.post('/setVerificationStatus', async (req, res) => {
    try {
        const { farmerId, status } = req.body; // <-- FIXED
        if (!farmerId) {
            return res.status(400).json({
                success: false,
                message: "farmerId is required"
            });
        }
        const validStatuses = ["pending", "acknowledge", "verified", "rejected"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status value"
            });
        }
        const farmer = await db.farmer.findUnique({
            where: { id: farmerId }
        });
        if (!farmer) {
            return res.status(404).json({
                success: false,
                message: "Farmer not found"
            });
        }
        const updated = await db.farmer.update({
            where: { id: farmerId },
            data: {
                status,
            }
        });
        return res.status(200).json({
            success: true,
            message: "Status updated successfully",
            farmer: updated
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
farmerAdminRouter.post('/verifyFarmer', async (req, res) => {
    try {
        const { farmerId } = req.body;
        if (!farmerId) {
            return res.status(400).json({
                success: false,
                message: "farmerId is required",
            });
        }
        // check if farmer exists
        const farmer = await db.farmer.findUnique({
            where: { id: farmerId },
        });
        if (!farmer) {
            return res.status(404).json({
                success: false,
                message: "Farmer not found",
            });
        }
        // update verification status
        const updatedFarmer = await db.farmer.update({
            where: { id: farmerId },
            data: {
                isVerified: true,
            },
        });
        return res.status(200).json({
            success: true,
            message: "Farmer verification updated (isVerified = true)",
            farmer: updatedFarmer,
        });
    }
    catch (error) {
        console.error("Error updating verification:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
farmerAdminRouter.post('/getFarmerDetails', async (req, res) => {
    try {
        const { farmerId } = req.body;
        if (!farmerId) {
            return res.status(400).json({
                success: false,
                message: "farmerId is required"
            });
        }
        const farmer = await db.farmer.findUnique({
            where: { id: farmerId },
            include: {
                landInfo: true,
                documents: true,
                herbData: true,
            }
        });
        if (!farmer) {
            return res.status(404).json({
                success: false,
                message: "Farmer not found"
            });
        }
        return res.status(200).json({
            success: true,
            farmer
        });
    }
    catch (error) {
        console.error("Error fetching farmer details:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
//# sourceMappingURL=farmer.route.js.map