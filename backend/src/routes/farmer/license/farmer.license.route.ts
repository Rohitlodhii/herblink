import { Router } from 'express'
import { verifyJwt } from '../../../middlewares/jwt.verify.js';
import { addCrops, addLandInfo, addPersonalInfoFarmer } from '../../../controllers/farmer/license.farmer.js';

const farmerLicenseRouter = Router();


farmerLicenseRouter.use('/personalInfo' , verifyJwt , addPersonalInfoFarmer );
farmerLicenseRouter.use('/landinfo' , verifyJwt  , addLandInfo);
farmerLicenseRouter.use('/addCrops' , verifyJwt , addCrops);

export default farmerLicenseRouter;


