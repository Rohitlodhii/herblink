import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function addHerb(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { herbname, harvestDate, coordinates, pesticidesUsed, quantity, desc, } = req.body;
        if (!herbname || !harvestDate || !coordinates || !quantity || !desc) {
            return res.status(400).json({
                msg: "herbname, harvestDate, coordinates, quantity and desc are required",
            });
        }
        const herb = await db.herbData.create({
            data: {
                herbname,
                harvestDate,
                coordinates,
                pesticidesUsed,
                quantity,
                desc,
                farmerID: userId,
            },
        });
        return res.status(201).json({
            msg: "Herb added successfully",
            id: herb.id,
            data: herb,
        });
    }
    catch (error) {
        logger.error("farmer_add_herb_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=product.farmer.js.map