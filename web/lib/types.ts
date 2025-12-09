export type ISO = string;

export interface Processor {
  id: string;
  name: string;
  contactEmail?: string;
  phone?: string;
  createdAt: ISO;
  updatedAt: ISO;
}

export interface ProcessorFarmerItem {
  id: string;
  farmerId: string;
  quantity: number;
  unit?: string;
  notes?: string;
  createdAt: ISO;
  updatedAt: ISO;
}

export interface ProcessorInventory {
  id: string;
  processedQuantity?: number;
  processor: Processor;
  items: ProcessorFarmerItem[];
  createdAt: ISO;
  updatedAt: ISO;
}

export interface HerbInventory {
  id: string;
  quantityReceived: number;
  unit?: string;
  processorInventoryId?: string;
  processorInventory?: ProcessorInventory;
  createdAt: ISO;
  updatedAt: ISO;
}

export interface ProductInventory {
  id: string;
  herbName: string;
  herbInventories: HerbInventory[];
  createdAt: ISO;
  updatedAt: ISO;
}

export interface Manufacturer {
  id: string;
  name: string;
  address?: string;
  contactEmail?: string;
  phone?: string;
  createdAt: ISO;
  updatedAt: ISO;
}

export interface Product {
  id: string;
  manufacturerId: string;
  productName: string;
  productDescription?: string;
  productImage?: string;
  productionDate?: string;
  productionBatch?: string;
  createdAt: ISO;
  updatedAt: ISO;
  manufacturer: Manufacturer;
  inventories: ProductInventory[];
}

export interface FullProductResponse {
  msg: string;
  data: Product;
}
