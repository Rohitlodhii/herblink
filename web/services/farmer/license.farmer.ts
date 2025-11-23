import { PersonalInfoSchema } from "@/app/farmer/dashboard/components/addPersonalInfo";
import { FarmSchema } from "@/app/farmer/dashboard/components/landinfo/farmPlotFrom";
import api from "@/lib/axios";
import z from "zod";



export class FarmerLicense  {
    private static base = '/farmer/license' 

    static async addPersonalInfo( values : z.infer<typeof PersonalInfoSchema>) {
        try {
            const res = await api.post(`${this.base}/personalInfo` , {
                fullname : values.fullname,
                dob : values.dob,
                address : values.address,
                password : values.password
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




} 