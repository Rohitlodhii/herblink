import { NextRequest, NextResponse } from "next/server";

type ISO = string;

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  // Mocked product data with nested relations matching the requested shape
  const now = new Date().toISOString();

  const product = {
    id,
    manufacturerId: "manu_123",
    productName: "Green Herbland Oil",
    productDescription: "Cold-pressed herbal oil from selected plots.",
    productImage: "/images/products/green-oil.jpg",
    productionDate: "2025-11-25",
    productionBatch: "BATCH-2025-11-25-01",
    createdAt: now,
    updatedAt: now,
    manufacturer: {
      id: "manu_123",
      name: "Herb Manufacturer Ltd",
      address: "123 Herbal Way",
      contactEmail: "contact@herbmanu.example",
      phone: "+1-555-0100",
      createdAt: now,
      updatedAt: now,
    },
    inventories: [
      {
        id: "inv_1",
        herbName: "Chamomile",
        createdAt: now,
        updatedAt: now,
        herbInventories: [
          {
            id: "herb_inv_1",
            quantityReceived: 120,
            unit: "kg",
            processorInventoryId: "proc_inv_1",
            createdAt: now,
            updatedAt: now,
            processorInventory: {
              id: "proc_inv_1",
              processedQuantity: 110,
              createdAt: now,
              updatedAt: now,
              processor: {
                id: "proc_1",
                name: "Green Processor Co",
                contactEmail: "proc@green.example",
                phone: "+1-555-0200",
                createdAt: now,
                updatedAt: now,
              },
              items: [
                {
                  id: "item_1",
                  farmerId: "farmer_1",
                  quantity: 50,
                  unit: "kg",
                  notes: "Fresh harvest",
                  createdAt: now,
                  updatedAt: now,
                },
                {
                  id: "item_2",
                  farmerId: "farmer_2",
                  quantity: 70,
                  unit: "kg",
                  notes: "Dried",
                  createdAt: now,
                  updatedAt: now,
                },
              ],
            },
          },
        ],
      },
      {
        id: "inv_2",
        herbName: "Lavender",
        createdAt: now,
        updatedAt: now,
        herbInventories: [],
      },
    ],
  };

  return NextResponse.json({ msg: "success", data: product });
}
