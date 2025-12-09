import api from "@/lib/axios";
import { FarmerAuthUser } from "./farmer";
export class FarmerService {
  private static base = "/farmer/get";

  static async getFarmerData() {
    try {
      const res = await api.get(`${this.base}/userdata`);
      console.log("USERDATA RAW:", res.data);

      return res.data.data.result;  // CORRECT FORMAT
    } catch (error: any) {
      console.error("Error Farmer GET:", error);
      throw error;
    }
  }

  static async getFarmerLandInfo() {
    try {
      const res = await api.get(`${this.base}/landinfo`);
      console.log("LANDINFO RAW:", res.data);

      return res.data.result; // CORRECT FORMAT
    } catch (error) {
      console.error("Error in fetching landinformation");
      throw error;
    }
  }
}
