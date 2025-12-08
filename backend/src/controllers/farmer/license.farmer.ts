import { Request , Response } from 'express'
import { AuthenticatedRequest } from '../../middlewares/jwt.verify.js';
import logger from '../../config/logger.js';
import db from '../../config/db.js';
import { PasswordHash } from '../../config/passwordhash.js';


const bcryptHash = new PasswordHash() ;

export async function addPersonalInfoFarmer(req : AuthenticatedRequest ,res :Response) {
    try {
        const { 
            fullname, 
            dob, 
            address, 
            password,
            fatherName,
            gender,
            aadharNumber,
            annualIncome,
            farmerType
        } = req.body;  
        const userId = req.userId;

        if(!userId || !fullname || !dob || !password || !address || !farmerType){
            logger.warn(`Farmer_AddPersonalInfo_Field_Not_Found ${userId || "unknownuser"}`);
            return res.status(404).json({
                msg : "All required fields are missing (fullname, dob, address, password, farmerType)"
            })
        };

        const user = await db.farmer.findUnique({
            where : {
                id : userId
            }
        });

        if(!user || !user?.mobileNumberVerified){
            logger.warn(`Famer_AddPersonInfo_Not_Found_NotVerifed ${userId || "Not User Found"}`)
            return res.status(404).json({
                msg : "No user found or unauthorized"
            })
        };

        const hashedPassword = await bcryptHash.generateHash(password);

        const result  = await db.farmer.update({
            where : {
                id : userId
            },
            data : {
                fullName : fullname ,
                dob : dob ,
                address : address ,
                password : hashedPassword ,
                fatherName : fatherName || null,
                gender : gender || null,
                aadharNumber : aadharNumber || null,
                annualIncome : annualIncome || null,
                farmerType : farmerType,
            }
        })

        res.status(200).json({
            msg : "Successfully updated"
        })
          
    } catch (error) {
        logger.error(`ERROR_FARMER_AddInfo ${error}`)
        res.status(400).json({
            msg : "Internal server error , Try again"
        })
    }
}   

export async function addLandInfo(req:AuthenticatedRequest , res:Response){
    try {
        const { totalHectare , khasraNumber , coordinates } =req.body;
        const userId = req.userId;

           // Validate input
        if (!userId || !totalHectare || !khasraNumber) {
        logger.warn(`Farmer_AddLandInfo_Field_Not_Found ${userId || "unknownuser"}`);
        return res.status(400).json({
          msg: "All fields are required (totalHectare, khasraNumber, coordinates)",
        });
        }

        const farmer = await db.farmer.findUnique({
            where: { id: userId },
        });

        if (!farmer || !farmer.mobileNumberVerified) {
            logger.warn(`Farmer_AddLandInfo_Unauthorized ${userId || "unknown"}`);
            return res.status(401).json({
              msg: "No farmer found or not verified",
            });
        }


        const result = await db.landInfo.create({
            data : {
                totalHectare  : parseFloat(totalHectare),
                khasraNumber : khasraNumber ,
                coordinates : coordinates ? JSON.parse(JSON.stringify(coordinates)) : null, 
                farmerID : userId
            }
        })
      
        logger.info(`Farmer_AddLandInfo_Success ${userId}`);
        res.status(201).json({
          msg: "Land information added successfully",
          data: result,
        });
      } catch (error) {
        logger.error(`ERROR_FARMER_AddLandInfo ${error}`);
        res.status(500).json({
          msg: "Internal server error, please try again",
        });
      }
}


// export async function addCrops(req: AuthenticatedRequest, res: Response) {
//         try {
//           const { crops } = req.body; // Expecting crops: ["Wheat", "Corn", "Rice"]
//           const userId = req.userId;
      
//           // Validate input
//           if (!userId || !crops || !Array.isArray(crops) || crops.length === 0) {
//             logger.warn(`Farmer_AddCrops_InvalidInput ${userId || "unknown"}`);
//             return res.status(400).json({
//               msg: "Invalid input. Provide an array of crop names.",
//             });
//           }
      
//           // Check if the farmer exists and is verified
//           const farmer = await db.farmer.findUnique({
//             where: { id: userId },
//           });
      
//           if (!farmer || !farmer.mobileNumberVerified) {
//             logger.warn(`Farmer_AddCrops_Unauthorized ${userId || "unknown"}`);
//             return res.status(401).json({
//               msg: "No farmer found or mobile number not verified",
//             });
//           }
      
//           // Prepare crop data
//           const cropData = crops.map((name: string) => ({
//             name: name.trim(),
//             farmerId: userId,
//           }));
      
//           // Insert all crops in one go
//           const result = await db.crop.createMany({
//             data: cropData,
//             skipDuplicates: true, // Optional: skips duplicate crop names if any
//           });
      
//           logger.info(`Farmer_AddCrops_Success ${userId}`);
//           res.status(201).json({
//             msg: "Crops added successfully",
//             addedCount: result.count,
//           });
//         } catch (error) {
//           logger.error(`ERROR_FARMER_AddCrops ${error}`);
//           res.status(500).json({
//             msg: "Internal server error, please try again",
//           });
//         }
// }


export async function applyFarmerLicense(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  try {
    if (!userId) {
      logger.warn(`Farmer_Apply_License_id_nf ${userId || "unknownuser"}`);
      return res.status(400).json({
        msg: "Token id not found",
      });
    }

    // 1. Fetch farmer details
    const farmer = await db.farmer.findUnique({
      where: { id: userId },
    });

    if (!farmer) {
      return res.status(404).json({
        msg: "Farmer not found",
      });
    }

    // 2. Force mark profile as completed
    // 3. Set status as pending
    await db.farmer.update({
      where: { id: userId },
      data: {
        isProfileCompleted: true,
        status: "pending",
      },
    });

    return res.status(200).json({
      msg: "Application submitted successfully",
    });

  } catch (error) {
    logger.error(`ERROR_FARMER_ApplyLicense ${error}`);
    return res.status(500).json({
      msg: "Internal server error, please try again",
    });
  }
}



export async function checkProfileCompleted(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  try {
    if (!userId) {
      return res.status(400).json({
        msg: "Token id not found"
      });
    }

    const farmer = await db.farmer.findUnique({
      where: { id: userId },
      select: {
        isProfileCompleted: true
      }
    });

    if (!farmer) {
      return res.status(404).json({
        msg: "Farmer not found"
      });
    }

    return res.status(200).json({
      success: true,
      isProfileCompleted: farmer.isProfileCompleted
    });

  } catch (error) {
    logger.error(`ERROR_CHECK_PROFILE_COMPLETED ${error}`);
    return res.status(500).json({
      msg: "Internal server error"
    });
  }
}
