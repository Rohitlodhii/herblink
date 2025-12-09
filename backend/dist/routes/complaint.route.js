import { Router } from "express";
import { createComplaint, getComplaintById, listComplaints } from "../controllers/complaint/complaint.controller.js";
const complaintRouter = Router();
complaintRouter.post("/", createComplaint);
complaintRouter.get("/", listComplaints);
complaintRouter.get("/:id", getComplaintById);
export default complaintRouter;
//# sourceMappingURL=complaint.route.js.map