import api from "@/lib/axios";
import { FarmerService } from "./index.farmer";


export class FarmerAuthService  {
  private static base = "/farmer/auth";

  static async signupFarmer(fullname: string, phoneNumber: string): Promise<any> {
    try {
      const res = await api.post(`${this.base}/signup`, {
        fullname,
        mobileNumber: phoneNumber,
      })
      
      return res.data
    } catch (error: any) {
      console.error("Error during farmer Signup:", error.response?.data || error.message)
  
     
      if (error.response?.data?.msg) {
        return { msg: error.response.data.msg }
      }
  
      
      throw new Error(error.response?.data?.error || "Signup failed")
    }
  }

  static async loginFarmer(mobileNumber: string): Promise<any> {
    try {
      console.log(mobileNumber)
      const res = await api.post(`${this.base}/login`, { mobileNumber });
      return res.data; 
    } catch (error: any) {
      console.error("Error during farmer login:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Login failed");
    }
  }

  static async verifyOtp(mobileNumber: string, otp: string): Promise<any> {
    try {
      const res = await api.post(`${this.base}/verifyOtp`, { mobileNumber, otp });
      return res.data; 
    } catch (error: any) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "OTP verification failed");
    }
  }

  static async logout(): Promise<void> {
    try {
      await api.post(`${this.base}/logout`);
    } catch (error: any) {
      console.error("Error logging out:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || "Logout failed");
    }
  }
}
