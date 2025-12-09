import api from "@/lib/axios";

export class ManufacturerHerbInventoryService {
  private static base = "/manufacturer/herb-inventory";

  // Create Herb Inventory
  static async createHerbInventory(data: {
    processorInventoryId: string;
    quantityReceived: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error creating herb inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to create herb inventory");
    }
  }

  // List Herb Inventories
  static async listHerbInventories(): Promise<any> {
    try {
      const res = await api.get(`${this.base}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching herb inventories:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch herb inventories");
    }
  }

  // Get Herb Inventory by ID
  static async getById(id: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching herb inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch herb inventory");
    }
  }

  // Update Herb Inventory
  static async updateById(id: string, data: Partial<{
    processorInventoryId: string;
    quantityReceived: string;
  }>): Promise<any> {
    try {
      const res = await api.put(`${this.base}/${id}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error updating herb inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to update herb inventory");
    }
  }

  // Delete Herb Inventory
  static async deleteById(id: string): Promise<any> {
    try {
      const res = await api.delete(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error deleting herb inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to delete herb inventory");
    }
  }
}

