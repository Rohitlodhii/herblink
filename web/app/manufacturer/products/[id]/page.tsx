"use client";

import React, { useEffect, useState } from "react";
import { getFullProductDetails } from "@/lib/api";
import type { FullProductResponse, Product } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type FetchState = {
  loading: boolean;
  error: string | null;
  data: Product | null;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [state, setState] = useState<FetchState>({ loading: true, error: null, data: null });

  useEffect(() => {
    let mounted = true;
    setState({ loading: true, error: null, data: null });
    getFullProductDetails(id)
      .then((res: FullProductResponse) => {
        if (!mounted) return;
        setState({ loading: false, error: null, data: res.data });
      })
      .catch((err: any) => {
        if (!mounted) return;
        setState({ loading: false, error: err?.message || String(err), data: null });
      });
    return () => {
      mounted = false;
    };
  }, [id]);

  if (state.loading) {
    return <div className="p-6">Loading product details…</div>;
  }

  if (state.error) {
    return <div className="p-6 text-red-600">Error: {state.error}</div>;
  }

  const product = state.data!;
  const inventories = product.inventories ?? [];

  return (
    <div className="space-y-6 p-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{product.productName || "Product"}</h1>
          <p className="text-sm text-muted-foreground">
            Batch: {product.productionBatch || "N/A"} — {product.productionDate || "N/A"}
          </p>
        </div>
        {product.productImage && (
          <img src={product.productImage} alt={product.productName || "product"} className="h-20 w-20 rounded-md object-cover" />
        )}
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Manufacturer</CardTitle>
            <CardDescription>Contact and address</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div>
                <div className="text-sm text-muted-foreground">Name</div>
                <div className="font-medium">{product.manufacturer?.name || "N/A"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">{product.manufacturer?.contactEmail || product.manufacturer?.email || "N/A"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">{product.manufacturer?.phone || "N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Inventories</h2>
        <div className="space-y-3 mt-3">
          {inventories.length === 0 && <div className="text-sm text-muted-foreground">No inventories recorded.</div>}

          {inventories.map((inv, invIdx) => {
            const herbInventories = inv.herbInventories ?? inv.HerbInventories ?? [];
            return (
              <details
                key={inv.id ?? invIdx}
                className="group [&_summary::-webkit-details-marker]:hidden rounded-lg border bg-card p-4"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Herb</div>
                    <div className="font-medium">{inv.herbName || "N/A"}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{herbInventories.length} herb inventories</div>
                </summary>
                <div className="mt-4 space-y-4">
                  {herbInventories.length === 0 && (
                    <div className="text-sm text-muted-foreground">No herb inventory entries.</div>
                  )}

                  {herbInventories.map((hi, hiIdx) => {
                    const processorInventory = hi.processorInventory;
                    const processor = processorInventory?.processor ?? processorInventory?.processorid;
                    const items = processorInventory?.items ?? processorInventory?.Items ?? [];
                    const processedQty = processorInventory?.processedQuantity ?? processorInventory?.finalQuantity ?? "N/A";

                    return (
                      <div key={hi.id ?? hiIdx} className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground">Received</div>
                            <div className="font-medium">
                              {hi.quantityReceived ?? "N/A"} {hi.unit || ""}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Processor Inventory ID: {hi.processorInventoryId || "N/A"}
                          </div>
                        </div>

                        {processorInventory && (
                          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="space-y-2">
                              <div className="text-sm text-muted-foreground">Processor</div>
                              <div className="font-medium">{processor?.name || "N/A"}</div>
                              <div className="text-sm">{processor?.contactEmail || processor?.email || "N/A"}</div>
                            </div>

                            <div>
                              <div className="text-sm text-muted-foreground">Processed Qty</div>
                              <div className="font-medium">{processedQty}</div>
                            </div>

                            <div className="sm:col-span-2">
                              <div className="text-sm text-muted-foreground">Farmer Items</div>
                              <div className="mt-2 space-y-2">
                                {items.length === 0 && (
                                  <div className="text-sm text-muted-foreground">No farmer items recorded.</div>
                                )}
                                {items.map((it, itemIdx) => (
                                  <div
                                    key={it.id ?? itemIdx}
                                    className="flex items-center justify-between rounded-md bg-muted px-3 py-2"
                                  >
                                    <div>
                                      <div className="text-sm">Farmer/Event: {it.farmerId ?? it.eventId ?? "N/A"}</div>
                                      <div className="text-xs text-muted-foreground">{it.notes || it.specie || "—"}</div>
                                    </div>
                                    <div className="font-medium">
                                      {it.quantity ?? "N/A"} {it.unit || ""}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
