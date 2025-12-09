"use client";

import api from "@/lib/axios";
import type {
  FullProductResponse,
  HerbInventory,
  Manufacturer,
  Product,
  ProductInventory,
  Processor,
  ProcessorFarmerItem,
  ProcessorInventory,
} from "./types";

const toArray = <T = any>(value: any): T[] => (Array.isArray(value) ? value : []);

const normalizeProcessor = (raw: any): Processor | undefined => {
  if (!raw) return undefined;
  return {
    id: raw.id,
    processorId: raw.processorId,
    name: raw.name ?? raw.processorId,
    contactEmail: raw.contactEmail ?? raw.email,
    email: raw.email,
    phone: raw.phone,
    organization: raw.organization,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
  };
};

const normalizeFarmerItem = (raw: any): ProcessorFarmerItem => ({
  id: raw?.id,
  farmerId: raw?.farmerId ?? raw?.eventId,
  eventId: raw?.eventId,
  specie: raw?.specie,
  quantity: raw?.quantity,
  unit: raw?.unit,
  notes: raw?.notes ?? raw?.specie,
  createdAt: raw?.createdAt,
  updatedAt: raw?.updatedAt,
});

const normalizeProcessorInventory = (raw: any): ProcessorInventory | undefined => {
  if (!raw) return undefined;
  return {
    id: raw.id,
    inventoryName: raw.inventoryName,
    assignedGrade: raw.assignedGrade,
    processedQuantity: raw.processedQuantity ?? raw.finalQuantity,
    finalQuantity: raw.finalQuantity,
    processor: normalizeProcessor(raw.processor ?? raw.processorid),
    items: toArray(raw.Items ?? raw.items).map(normalizeFarmerItem),
    LabProcessorInputs: raw.LabProcessorInputs,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
  };
};

const normalizeHerbInventory = (raw: any): HerbInventory => ({
  id: raw?.id,
  quantityReceived: raw?.quantityReceived,
  unit: raw?.unit,
  processorInventoryId: raw?.processorInventoryId,
  processorInventory: normalizeProcessorInventory(raw?.processorInventory),
  productInventoryId: raw?.productInventoryId,
  createdAt: raw?.createdAt,
  updatedAt: raw?.updatedAt,
});

const normalizeProductInventory = (raw: any): ProductInventory => ({
  id: raw?.id,
  herbName: raw?.HerbName ?? raw?.herbName,
  HerbName: raw?.HerbName,
  herbInventories: toArray(raw?.HerbInventories ?? raw?.herbInventories).map(normalizeHerbInventory),
  createdAt: raw?.createdAt,
  updatedAt: raw?.updatedAt,
});

const normalizeManufacturer = (raw: any): Manufacturer | undefined => {
  if (!raw) return undefined;
  return {
    id: raw.id,
    manufacturerId: raw.manufacturerId,
    name: raw.name ?? raw.manufacturerId,
    address: raw.address,
    contactEmail: raw.contactEmail ?? raw.email,
    email: raw.email,
    phone: raw.phone,
    organization: raw.organization,
    status: raw.status,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
  };
};

const normalizeProduct = (raw: any): Product => ({
  id: raw?.id,
  manufacturerId: raw?.manufacturerId,
  productName: raw?.productName,
  productDescription: raw?.productDescription,
  productImage: raw?.productImage,
  productionDate: raw?.productionDate,
  productionBatch: raw?.productionBatch,
  createdAt: raw?.createdAt,
  updatedAt: raw?.updatedAt,
  manufacturer: normalizeManufacturer(raw?.manufacturer),
  inventories: toArray(raw?.Inventories ?? raw?.inventories).map(normalizeProductInventory),
  Inventories: toArray(raw?.Inventories ?? raw?.inventories).map(normalizeProductInventory),
});

export async function getFullProductDetails(id: string): Promise<FullProductResponse> {
  if (!id) {
    throw new Error("Product id is required");
  }

  try {
    const res = await api.get(`/admin/products/${encodeURIComponent(id)}/details`);
    const rawProduct = res.data?.product ?? res.data?.data;
    const product = normalizeProduct(rawProduct ?? {});

    return {
      msg: res.data?.message ?? res.data?.msg ?? "Product details retrieved successfully",
      message: res.data?.message,
      success: res.data?.success,
      data: product,
    };
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      error?.message ||
      "Failed to fetch product details";
    throw new Error(message);
  }
}
