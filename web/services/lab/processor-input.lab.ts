import api from "@/lib/axios";

export class LabProcessorInputService {
  private static base = "/lab/processor-input";

  static async addProcessorInput(data: {
    processorInventoryId: string;
    reportpath?: string;
    description?: string;
    isDone?: boolean;
  }): Promise<any> {
    try {
      const res = await api.post(this.base, data);
      return res.data;
    } catch (error: any) {
      console.error("Error adding lab processor input:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to add lab processor input");
    }
  }

  static async listProcessorInputs(): Promise<any> {
    try {
      const res = await api.get(this.base);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching lab processor inputs:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch lab processor inputs");
    }
  }

  static async listPendingReports(): Promise<any> {
    try {
      const res = await api.get(`${this.base}/pending-report`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching pending reports:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch pending reports");
    }
  }

  static async updateProcessorInput(id: string, data: {
    reportpath?: string;
    description?: string;
    isDone?: boolean;
  }): Promise<any> {
    try {
      const res = await api.put(`${this.base}/${id}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error updating lab processor input:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to update lab processor input");
    }
  }
}


