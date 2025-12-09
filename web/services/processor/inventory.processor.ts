import api from "@/lib/axios";

export class ProcessorInventoryService {
  private static base = "/processor/inventory";

  // Create Inventory
  static async createInventory(data: {
    inventoryName: string;
    assignedGrade: string;
    specie: string;
    moisture?: string;
    soilType?: string;
    WaterType?: string;
    Season?: string;
    Location?: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error creating inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to create inventory");
    }
  }

  // List Inventories
  static async listInventories(): Promise<any> {
    try {
      const res = await api.get(`${this.base}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching inventories:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch inventories");
    }
  }

  // Get Inventory by ID
  static async getInventoryById(id: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch inventory");
    }
  }

  // Update Inventory
  static async updateInventory(id: string, data: {
    inventoryName?: string;
    assignedGrade?: string;
    processinglist?: string;
    specie?: string;
    finalQuantity?: string;
    sendedToLab?: string;
    isprocessingDone?: boolean;
    moisture?: string;
    soilType?: string;
    WaterType?: string;
    Season?: string;
    Location?: string;
  }): Promise<any> {
    try {
      const res = await api.put(`${this.base}/${id}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error updating inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to update inventory");
    }
  }
}

