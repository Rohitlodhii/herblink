import api from "@/lib/axios";

export class ProcessorPlantService {
  private static base = "/processor/plant";

  // Create/Update Plant Info
  static async savePlantInfo(data: {
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error saving plant info:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to save plant info");
    }
  }

  // Get Plant Info
  static async getPlantInfo(): Promise<any> {
    try {
      const res = await api.get(`${this.base}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching plant info:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch plant info");
    }
  }
}

