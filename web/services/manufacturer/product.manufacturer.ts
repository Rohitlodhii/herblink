import api from "@/lib/axios";

export class ManufacturerProductService {
  private static base = "/manufacturer/product";

  // Create Product
  static async createProduct(data: {
    productName: string;
    productDescription?: string;
    productImage?: string;
    productionDate?: string;
    productionBatch?: string;
  }): Promise<any> {
    try {
      const res = await api.post(`${this.base}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error creating product:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to create product");
    }
  }

  // List Products
  static async listProducts(): Promise<any> {
    try {
      const res = await api.get(`${this.base}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching products:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch products");
    }
  }

  // Get Product by ID
  static async getProductById(id: string): Promise<any> {
    try {
      const res = await api.get(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error fetching product:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to fetch product");
    }
  }

  // Update Product
  static async updateProduct(id: string, data: Partial<{
    productName: string;
    productDescription: string;
    productImage: string;
    productionDate: string;
    productionBatch: string;
  }>): Promise<any> {
    try {
      const res = await api.put(`${this.base}/${id}`, data);
      return res.data;
    } catch (error: any) {
      console.error("Error updating product:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to update product");
    }
  }

  // Delete Product
  static async deleteProduct(id: string): Promise<any> {
    try {
      const res = await api.delete(`${this.base}/${id}`);
      return res.data;
    } catch (error: any) {
      console.error("Error deleting product:", error.response?.data || error.message);
      if (error.response?.data?.msg) {
        throw new Error(error.response.data.msg);
      }
      throw new Error(error.response?.data?.error || "Failed to delete product");
    }
  }
}

