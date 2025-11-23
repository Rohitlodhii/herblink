import db from "../../config/db.js";
import { AuthenticatedRequest } from "../../middlewares/jwt.verify.js";
import { Response } from "express";
import logger from "../../config/logger.js";

async function addLabInfo( req : AuthenticatedRequest , res  : Response){
    
    const id = req.userId;
       
    try {

        const { address , type , labName , nablCertificateNo , isFssaiReq , fssaiReqNo , about} = req.body;

        if(!id) {
            logger.warn(`Lab_AddInfo_id_not_found ${id || "unknown"}`);
            return res.status(404).json({
                msg :  "Lab id not found"
            })
        }

        const getLab = await db.lab.findUnique({
            where : {
                id : id 
            }
        });

        if(!getLab){
            logger.warn(`Lab_AddInfo_lab_not_found ${id}`);
            return res.status(404).json({
                msg : "Lab not found"
            })
        };

        // Validate type if provided
        if(type && type !== 'GOVT' && type !== 'PVT') {
            logger.warn(`Lab_AddInfo_invalid_type ${id} ${type}`);
            return res.status(400).json({
                msg : "Type must be either 'GOVT' or 'PVT'"
            })
        }

        // Prepare data for upsert - only include fields that are provided
        const labInfoData: {
            address?: string;
            type?: 'GOVT' | 'PVT';
            labName?: string;
            nablCertificateNo?: string;
            isFssaiReg?: boolean;
            fssaiRegNo?: string;
            about?: string;
        } = {};

        if (address !== undefined) labInfoData.address = address;
        if (type !== undefined) labInfoData.type = type as 'GOVT' | 'PVT';
        if (labName !== undefined) labInfoData.labName = labName;
        if (nablCertificateNo !== undefined) labInfoData.nablCertificateNo = nablCertificateNo;
        if (isFssaiReq !== undefined) labInfoData.isFssaiReg = isFssaiReq;
        if (fssaiReqNo !== undefined) labInfoData.fssaiRegNo = fssaiReqNo;
        if (about !== undefined) labInfoData.about = about;

        // Upsert LabInfo (create if doesn't exist, update if it does)
        const result = await db.labInfo.upsert({
            where: {
                labID: id
            },
            update: labInfoData,
            create: {
                labID: id,
                ...labInfoData
            }
        });

        logger.info(`Lab_AddInfo_success ${id}`);
        return res.status(200).json({
            msg: "Lab information added/updated successfully",
            data: result
        });
        
    } catch (error) {
        logger.error(`ERROR_LAB_AddInfo ${id || "unknown"}`, { 
            error: (error as Error).message, 
            stack: (error as Error).stack 
        });
        return res.status(500).json({
            msg: "Internal server error, please try again"
        });
    }
}

export default addLabInfo;