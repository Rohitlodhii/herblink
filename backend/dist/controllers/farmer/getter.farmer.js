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
//# sourceMappingURL=getter.farmer.js.map