import { PersonalInfoSchema } from "@/app/farmer/dashboard/components/addPersonalInfo";
import { FarmSchema } from "@/app/farmer/dashboard/components/landinfo/farmPlotFrom";
import api from "@/lib/axios";
import z from "zod";



export class FarmerLicense  {
    private static base = '/farmer/license' 

    static async applyLicense() {
      try {
        const res = await api.post(`${this.base}/apply`);
    
        return res.data;
      } catch (error: any) {
        console.error("Error applying for farmer license:", error.response?.data || error.message);
    
        if (error.response?.data?.msg) {
          return { msg: error.response.data.msg };
        }
    
        throw new Error("Failed to apply for farmer license");
      }
    }
    

    static async checkProfileCompleted() {
      try {
        const res = await api.get(`${this.base}/checkProfileCompleted`);
    
        return res.data; 
      } catch (error: any) {
        console.error("Error checking profile completion:", error.response?.data || error.message);
    
        if (error.response?.data?.msg) {
          return { msg: error.response.data.msg };
        }
    
        throw new Error("Failed to check profile completion status");
      }
    }
    static async checkVerificationStatus() {
      try {
        const res = await api.get(`${this.base}/checkProfileCompleted`);
    
        return res.data; 
      } catch (error: any) {
        console.error("Error checking profile completion:", error.response?.data || error.message);
    
        if (error.response?.data?.msg) {
          return { msg: error.response.data.msg };
        }
    
        throw new Error("Failed to check profile completion status");
      }
    }

    
    

    

    static async addPersonalInfo( values : z.infer<typeof PersonalInfoSchema>) {
        try {
            const res = await api.post(`${this.base}/personalInfo` , {
                // Required fields
                fullname : values.fullname,
                dob : values.dob,
                address : values.address,
                password : values.password,
                farmerType : values.farmerType,
                // Optional fields
                ...(values.fatherName && { fatherName: values.fatherName }),
                ...(values.gender && { gender: values.gender }),
                ...(values.aadharNumber && { aadharNumber: values.aadharNumber }),
                ...(values.annualIncome && { annualIncome: values.annualIncome }),
            });

            return res.data;
    } catch (error: any) {
      console.error("Error during farmer addPersonalInfo:", error.response?.data || error.message)
  
     
      if (error.response?.data?.msg) {
        return { msg: error.response.data.msg }
      }
  
      
      throw new Error("Adding new data failed")
    }
  }

static async addLandInfo( values : z.infer<typeof FarmSchema>){
    try {
        const res = await api.post(`${this.base}/landinfo` ,{
            totalHectare : values.totalHectare,
            khasraNumber : values.khasraNumber,
            coordinates : values.polygon

        })
        return res.data;
    } catch (error: any) {
      console.error("Error during farmer addLandInfo:", error.response?.data || error.message)
  
     
      if (error.response?.data?.msg) {
        return { msg: error.response.data.msg }
      }
  
      
      throw new Error("Adding new Land data failed")
    }
  }

  static async getVerificationStatus(farmerId: string) {
    try {
      const res = await api.get(`${this.base}/verificationStatus/${farmerId}`);
  
      return res.data;
    } catch (error: any) {
      console.error("Error fetching verification status:", error.response?.data || error.message);
  
      if (error.response?.data?.msg) {
        return { msg: error.response.data.msg };
      }
  
      throw new Error("Failed to fetch verification status");
    }
  }



} 

