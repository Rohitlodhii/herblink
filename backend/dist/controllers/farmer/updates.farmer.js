import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function deleteFarmerLandInfo(req, res) {
    const id = req.userId;
    try {
        const { landinfoid } = req.body;
        if (!id || !landinfoid) {
            return res.status(404).json({
                msg: "No user found, Please re-login"
            });
        }
        let result = await db.landInfo.delete({
            where: {
                id: landinfoid
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
            msg: "Error Deletion LandInformation , Please Relogin"
        });
    }
}
//# sourceMappingURL=updates.farmer.js.map