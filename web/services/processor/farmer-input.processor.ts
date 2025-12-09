import api from "@/lib/axios";

export class ProcessorFarmerInputService {
  private static base = "/processor/farmer-input";

  // Add Farmer Input to Inventory
  static async addFarmerInput(data: {
    inventoryID: string;
    quantity: string;
    eventId: string;
    specie?: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error adding farmer input:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to add farmer input");
    }
  }

  // List Farmer Inputs for an Inventory
  static async listFarmerInputsByInventory(inventoryId: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/inventory/${inventoryId}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching farmer inputs:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch farmer inputs");
    }
  }

  // Get Farmer Input by Event ID
  static async getFarmerInputByEventId(eventId: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/event/${eventId}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching farmer input:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch farmer input");
    }
  }
}

