export interface FarmerAuthUser {
    id: string;
    mobileNumber: string;
    mobileNumberVerified: boolean;
    farmerID: string | null;
    password: string | null;
    fullName: string | null;
    dob: string | null;
    address: string | null;
    isVerified: boolean;
    isProfileCompleted: boolean;
    createdAt: string;   // ISO string
    updateAt: string;    // ISO string
  }
  