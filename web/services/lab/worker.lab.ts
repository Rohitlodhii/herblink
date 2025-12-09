import api from "@/lib/axios";

export class LabWorkerService {
  private static base = "/lab/worker";

  static async addWorker(data: {
    name: string;
    workerId: string;
    role: "ADMIN" | "WORKER";
    desc?: string;
  }): Promise<any> {
    try {
      const res = await api.post(this.base, data);
      return res.data;
    } catch (error: any) {
      console.error("Error adding lab worker:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to add lab worker");
    }
  }
}


