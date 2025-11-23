import api from "@/lib/axios";
import { FarmerAuthUser } from "./farmer";

export class FarmerService {
  private static base = "/farmer/get";

  static async getFarmerData() {
    try {
      const res = await api.get(`${this.base}/userdata`);
      return res.data.result as FarmerAuthUser[];   // FIXED
    } catch (error: any) {
      console.error("Error Farmer GET:", error);
      throw error;
    }
  }

  static async getFarmerLandInfo() {
    try {
      const res = await api.get(`${this.base}/landinfo`);
      return res.data.result ;
    } catch (error) {
      console.error("Error in fetching landinformation");
      throw error;
    }
  }

 
  
}
