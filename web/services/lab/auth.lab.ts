import api from "@/lib/axios";

export class LabAuthService {
  private static base = "/lab/auth";

  static async signupLab(data: {
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/signup`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during lab signup:", error.response?.data || error.message);
      
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      
      throw new Error(error.response?.data?.error || "Signup failed");
    }
  }

  static async loginLab(data: { email: string; password: string }): Promise<any> {
    try {
      const res = await api.post(`${this.base}/login`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error during lab login:", error.response?.data || error.message);

      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }

      throw new Error(error.response?.data?.error || "Login failed");
    }
  }
}

