export type ISO = string;

export interface Processor {
  id?: string;
  processorId?: string;
  name?: string;
  contactEmail?: string;
  email?: string;
  phone?: string;
  organization?: string;
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface ProcessorFarmerItem {
  id?: string;
  farmerId?: string;
  eventId?: string;
  specie?: string;
  quantity?: number | string;
  unit?: string;
  notes?: string;
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface ProcessorInventory {
  id?: string;
  inventoryName?: string;
  assignedGrade?: string;
  processedQuantity?: number | string;
  finalQuantity?: string;
  processor?: Processor;
  processorid?: Processor;
  items?: ProcessorFarmerItem[];
  Items?: ProcessorFarmerItem[];
  LabProcessorInputs?: any[];
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface HerbInventory {
  id?: string;
  quantityReceived?: number | string;
  unit?: string;
  processorInventoryId?: string;
  processorInventory?: ProcessorInventory;
  productInventoryId?: string;
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface ProductInventory {
  id?: string;
  herbName?: string;
  HerbName?: string;
  herbInventories: HerbInventory[];
  HerbInventories?: HerbInventory[];
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface Manufacturer {
  id?: string;
  manufacturerId?: string;
  name?: string;
  address?: string;
  contactEmail?: string;
  email?: string;
  phone?: string;
  organization?: string;
  status?: string;
  createdAt?: ISO;
  updatedAt?: ISO;
}

export interface Product {
  id?: string;
  manufacturerId?: string;
  productName?: string;
  productDescription?: string;
  productImage?: string;
  productionDate?: string;
  productionBatch?: string;
  createdAt?: ISO;
  updatedAt?: ISO;
  manufacturer?: Manufacturer;
  inventories: ProductInventory[];
  Inventories?: ProductInventory[];
}

export interface FullProductResponse {
  msg?: string;
  message?: string;
  success?: boolean;
  data: Product;
}
