import { Router } from 'express';
import { verifyJwt } from '../../../middlewares/jwt.verify.js';
import { addLandInfo, addPersonalInfoFarmer, applyFarmerLicense, checkProfileCompleted } from '../../../controllers/farmer/license.farmer.js';
import { getVerificationStatus } from '../../../controllers/farmer/getter.farmer.js';
const farmerLicenseRouter = Router();
farmerLicenseRouter.use('/personalInfo', verifyJwt, addPersonalInfoFarmer);
farmerLicenseRouter.use('/landinfo', verifyJwt, addLandInfo);
// farmerLicenseRouter.use('/addCrops' , verifyJwt , addCrops);
farmerLicenseRouter.use('/applylicense', verifyJwt, applyFarmerLicense);
farmerLicenseRouter.use('/getverificatonstatus', verifyJwt, getVerificationStatus);
farmerLicenseRouter.use('/isProfileComplete', verifyJwt, checkProfileCompleted);
export default farmerLicenseRouter;
//# sourceMappingURL=farmer.license.route.js.map