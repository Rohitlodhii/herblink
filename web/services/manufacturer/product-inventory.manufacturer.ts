import api from "@/lib/axios";

export class ManufacturerProductInventoryService {
  private static base = "/manufacturer/product-inventory";

  // Create Product Inventory
  static async createProductInventory(data: {
    productId: string;
    HerbName: string;
    herbInventoryId: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error creating product inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to create product inventory");
    }
  }

  // List Product Inventories by Product
  static async listByProduct(productId: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/product/${productId}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching product inventories:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch product inventories");
    }
  }

  // Get Product Inventory by ID
  static async getById(id: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching product inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch product inventory");
    }
  }

  // Update Product Inventory
  static async updateById(id: string, data: Partial<{
    HerbName: string;
    herbInventoryId: string;
  }>): Promise<any> {
    try {
      const res = await api.put(`${this.base}/${id}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error updating product inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to update product inventory");
    }
  }

  // Delete Product Inventory
  static async deleteById(id: string): Promise<any> {
    try {
      const res = await api.delete(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error deleting product inventory:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to delete product inventory");
    }
  }
}

