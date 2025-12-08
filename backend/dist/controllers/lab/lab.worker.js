import db from "../../config/db.js";
import logger from "../../config/logger.js";
export async function addLabWorker(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { name, workerId, role, desc } = req.body;
        if (!name || !workerId || !role) {
            return res.status(400).json({
                msg: "name, workerId and role are required",
            });
        }
        const lab = await db.lab.findUnique({ where: { id: userId } });
        if (!lab) {
            return res.status(404).json({ msg: "Lab not found" });
        }
        const worker = await db.labWorker.create({
            data: {
                name,
                workerId,
                role,
                desc,
                labID: lab.id,
            },
        });
        return res.status(201).json({
            msg: "Lab worker added successfully",
            data: worker,
        });
    }
    catch (error) {
        logger.error("lab_worker_add_error", {
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ msg: "Internal Server error" });
    }
}
//# sourceMappingURL=lab.worker.js.map