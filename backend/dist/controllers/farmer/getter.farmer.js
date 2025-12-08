import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function getFarmerData(req, res) {
    const id = req.userId;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "No user found, Please relogin"
            });
        }
        let result = await db.farmer.findMany({
            where: {
                id: id
            }
        });
        console.log(result);
        res.status(200).json({
            result
        });
    }
    catch (error) {
        logger.error(`Cant GET ${id} Data`);
        res.status(404).json({
            msg: "Error fetching user , Please Relogin"
        });
    }
}
export async function getFarmerLandInfo(req, res) {
    const id = req.userId;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "No user found, Please re-login"
            });
        }
        let result = await db.landInfo.findMany({
            where: {
                farmerID: id
            }
        });
        console.log(result);
        res.status(200).json({
            result
        });
    }
    catch (error) {
        logger.error(`Cant GET ${id} Data`);
        res.status(404).json({
            msg: "Error fetching LandInformation , Please Relogin"
        });
    }
}
export async function checkFarmerDataCompleted(req, res) {
    const id = req.userId;
    try {
        if (!id) {
            return res.status(401).json({ msg: "Unauthorized: user not authenticated" });
        }
        const farmer = await db.farmer.findFirst({
            where: { id },
            select: {
                id: true,
                mobileNumber: true,
                mobileNumberVerified: true,
                fullName: true,
                dob: true,
                address: true,
                status: true,
                isVerified: true,
                isProfileCompleted: true,
                createdAt: true,
                updateAt: true,
                farmerID: false, // exclude
                documents: false, // exclude
                landInfo: {
                    select: {
                        id: true,
                        totalHectare: true,
                        khasraNumber: true,
                        coordinates: true,
                    },
                },
            },
        });
        if (!farmer) {
            return res.status(404).json({ msg: "Farmer not found" });
        }
        // List required fields with label + value checks
        const requiredChecks = {
            fullName: !!farmer.fullName,
            dob: !!farmer.dob,
            address: !!farmer.address,
            mobileNumberVerified: farmer.mobileNumberVerified === true,
            landInfo: farmer.landInfo.length > 0,
        };
        // find first missing field
        const missingField = Object.keys(requiredChecks).find((key) => requiredChecks[key] === false);
        if (missingField) {
            return res.status(400).json({
                msg: `Missing required field: ${missingField}`,
                missingField,
            });
        }
        // All fields exist → mark as profile completed if not already
        if (!farmer.isProfileCompleted) {
            await db.farmer.update({
                where: { id },
                data: { isProfileCompleted: true },
            });
            farmer.isProfileCompleted = true; // mutate returned object so frontend gets updated value
        }
        return res.status(200).json({
            msg: "Farmer data fetched successfully",
            data: farmer,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}
export const getVerificationStatus = async (req, res) => {
    try {
        const { farmerId } = req.params;
        if (!farmerId) {
            return res.status(400).json({
                msg: "Missing farmer id, please re-login",
            });
        }
        const farmer = await db.farmer.findUnique({
            where: { id: farmerId },
            select: {
                status: true,
                isVerified: true,
                isProfileCompleted: true,
            },
        });
        if (!farmer) {
            return res.status(404).json({
                msg: "Farmer not found",
            });
        }
        return res.status(200).json({
            success: true,
            status: farmer.status,
            isVerified: farmer.isVerified,
            isProfileCompleted: farmer.isProfileCompleted,
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: error.message || "Failed to fetch verification status",
        });
    }
};
//# sourceMappingURL=getter.farmer.js.map