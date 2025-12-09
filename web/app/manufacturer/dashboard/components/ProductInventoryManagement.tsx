"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ManufacturerProductInventoryService } from "@/services/manufacturer/product-inventory.manufacturer";
import { ManufacturerProductService } from "@/services/manufacturer/product.manufacturer";
import { ManufacturerHerbInventoryService } from "@/services/manufacturer/herb-inventory.manufacturer";
import { Loader2, Plus, Eye, Edit, Trash, Layers } from "lucide-react";
import { toast } from "sonner";

const productInventorySchema = z.object({
  productId: z.string().min(1, "Product is required"),
  HerbName: z.string().min(1, "Herb name is required"),
  herbInventoryId: z.string().min(1, "Herb inventory is required"),
});

export default function ProductInventoryManagement() {
  const [items, setItems] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [herbs, setHerbs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  const form = useForm<z.infer<typeof productInventorySchema>>({
    resolver: zodResolver(productInventorySchema),
    defaultValues: {
      productId: "",
      HerbName: "",
      herbInventoryId: "",
    },
  });

  const editForm = useForm<z.infer<typeof productInventorySchema>>({
    resolver: zodResolver(productInventorySchema),
  });

  useEffect(() => {
    loadProducts();
    loadHerbs();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await ManufacturerProductService.listProducts();
      setProducts(res.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load products");
    }
  };

  const loadHerbs = async () => {
    try {
      const res = await ManufacturerHerbInventoryService.listHerbInventories();
      setHerbs(res.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load herb inventories");
    }
  };

  const loadByProduct = async (productId: string) => {
    try {
      setLoading(true);
      const res = await ManufacturerProductInventoryService.listByProduct(productId);
      setItems(res.data || []);
      setSelectedProductId(productId);
    } catch (err: any) {
      toast.error(err.message || "Failed to load product inventories");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: z.infer<typeof productInventorySchema>) => {
    try {
      setLoading(true);
      await ManufacturerProductInventoryService.createProductInventory(values);
      toast.success("Product inventory created");
      setCreateOpen(false);
      form.reset();
      if (values.productId) {
        loadByProduct(values.productId);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to create product inventory");
    } finally {
      setLoading(false);
    }
  };

  const openView = (item: any) => {
    setSelected(item);
    setViewOpen(true);
  };

  const openEdit = (item: any) => {
    setSelected(item);
    editForm.reset({
      productId: item.productId || "",
      HerbName: item.HerbName || "",
      herbInventoryId: item.herbInventoryId || "",
    });
    setEditOpen(true);
  };

  const handleUpdate = async (values: z.infer<typeof productInventorySchema>) => {
    if (!selected) return;
    try {
      setLoading(true);
      await ManufacturerProductInventoryService.updateById(selected._id || selected.id, values);
      toast.success("Product inventory updated");
      setEditOpen(false);
      setSelected(null);
      if (values.productId) {
        loadByProduct(values.productId);
      } else if (selectedProductId) {
        loadByProduct(selectedProductId);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to update product inventory");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item: any) => {
    if (!window.confirm("Delete this product inventory?")) return;
    try {
      setLoading(true);
      await ManufacturerProductInventoryService.deleteById(item._id || item.id);
      toast.success("Product inventory deleted");
      if (selectedProductId) loadByProduct(selectedProductId);
    } catch (err: any) {
      toast.error(err.message || "Failed to delete product inventory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Product Inventory</h2>
          <p className="text-muted-foreground">Link products to herb inventories by species.</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Product Inventory
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Product Inventory</DialogTitle>
              <DialogDescription>Specify product, herb inventory, and herb name.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="productId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select product</option>
                          {products.map((p) => (
                            <option key={p._id || p.id} value={p._id || p.id}>
                              {p.productName}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="HerbName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Herb Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ginger" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="herbInventoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Herb Inventory *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select herb inventory</option>
                          {herbs.map((h) => (
                            <option key={h._id || h.id} value={h._id || h.id}>
                              {h.quantityReceived} — {h.processorInventoryId}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                    Create
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Product</CardTitle>
          <CardDescription>Pick a product to view its inventories.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {products.map((p) => (
              <Button
                key={p._id || p.id}
                variant={selectedProductId === (p._id || p.id) ? "default" : "outline"}
                size="sm"
                onClick={() => loadByProduct(p._id || p.id)}
              >
                {p.productName}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedProductId ? (
        loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
          </div>
        ) : items.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No product inventories for this product.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <Card key={item._id || item.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.HerbName}</CardTitle>
                  <CardDescription>Herb Inv: {item.herbInventoryId}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => openView(item)}>
                      <Eye className="size-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openEdit(item)}>
                      <Edit className="size-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(item)}>
                      <Trash className="size-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      ) : (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Select a product to view inventories.
          </CardContent>
        </Card>
      )}

      {/* View Dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Inventory Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">Product ID:</span> {selected.productId}</p>
              <p className="text-sm"><span className="font-medium">Herb Name:</span> {selected.HerbName}</p>
              <p className="text-sm"><span className="font-medium">Herb Inventory ID:</span> {selected.herbInventoryId}</p>
              <p className="text-sm"><span className="font-medium">ID:</span> {selected._id || selected.id}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product Inventory</DialogTitle>
            <DialogDescription>Update product inventory details.</DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleUpdate)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select product</option>
                        {products.map((p) => (
                          <option key={p._id || p.id} value={p._id || p.id}>
                            {p.productName}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="HerbName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Herb Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ginger" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="herbInventoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Herb Inventory *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select herb inventory</option>
                        {herbs.map((h) => (
                          <option key={h._id || h.id} value={h._id || h.id}>
                            {h.quantityReceived} — {h.processorInventoryId}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                  Update
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

