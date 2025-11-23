import { Router } from 'express'
import { verifyJwt } from '../../../middlewares/jwt.verify.js';
import {  addLandInfo, addPersonalInfoFarmer, applyFarmerLicense } from '../../../controllers/farmer/license.farmer.js';

const farmerLicenseRouter = Router();


farmerLicenseRouter.use('/personalInfo' , verifyJwt , addPersonalInfoFarmer );
farmerLicenseRouter.use('/landinfo' , verifyJwt  , addLandInfo);
// farmerLicenseRouter.use('/addCrops' , verifyJwt , addCrops);
farmerLicenseRouter.use('/applylicense' , verifyJwt , applyFarmerLicense);

export default farmerLicenseRouter;


