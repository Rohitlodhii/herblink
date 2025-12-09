import api from "@/lib/axios";

export class ManufacturerAuthService {
  private static base = "/manufacturer/auth";

  static async signupManufacturer(data: {
    email: string;
    password: string;
    name?: string;
    address?: string;
    organization?: string;
    manufacturerId: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/signup`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during manufacturer signup:", error.response?.data || error.message);
      
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      
      throw new Error(error.response?.data?.error || "Signup failed");
    }
  }

  static async loginManufacturer(data: {
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/login`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during manufacturer login:", error.response?.data || error.message);
      
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      
      throw new Error(error.response?.data?.error || "Login failed");
    }
  }
}

