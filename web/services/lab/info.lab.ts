import api from "@/lib/axios";

export class LabInfoService {
  private static base = "/lab/license/info";

  static async saveInfo(data: {
    address?: string;
    type?: string;
    labName?: string;
    nablCertificateNo?: string;
    nablExp?: string;
    isFssaiReq?: boolean;
    fssaiReqNo?: string;
    about?: string;
  }): Promise<any> {
    try {
      const res = await api.post(this.base, data);
      return res.data;
    } catch (error: any) {
      console.error("Error saving lab info:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to save lab info");
    }
  }
}


