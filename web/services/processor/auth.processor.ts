import api from "@/lib/axios";

export class ProcessorAuthService {
  private static base = "/processor/auth";

  static async signupProcessor(data: {
    email: string;
    password: string;
    name?: string;
    address?: string;
    organization?: string;
    processorId: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/signup`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during processor signup:", error.response?.data || error.message);
      
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      
      throw new Error(error.response?.data?.error || "Signup failed");
    }
  }

  static async loginProcessor(data: {
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/login`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during processor login:", error.response?.data || error.message);
      
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      
      throw new Error(error.response?.data?.error || "Login failed");
    }
  }
}

