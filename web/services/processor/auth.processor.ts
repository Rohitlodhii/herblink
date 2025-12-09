import api from "@/lib/axios";

export class ProcessorAuthService {
  private static base = "/processor/auth";

  static async signupProcessor(data: {
    email: string;
    password: string;
    name?: string;
    address?: string;
    organization?: string;
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
}

