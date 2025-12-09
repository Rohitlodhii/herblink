"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ManufacturerProductService } from "@/services/manufacturer/product.manufacturer";
import { Loader2, Plus, Eye, Edit, Trash } from "lucide-react";
import { toast } from "sonner";

const productSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  productDescription: z.string().optional(),
  productImage: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  productionDate: z.string().optional(),
  productionBatch: z.string().optional(),
});

export default function ProductsManagement() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [chainOpen, setChainOpen] = useState(false);
  const [chainProduct, setChainProduct] = useState<{ id: string; name?: string } | null>(null);
  const [chainLoadingId, setChainLoadingId] = useState<string | null>(null);
  const chainTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
      productImage: "",
      productionDate: "",
      productionBatch: "",
    },
  });

  const editForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    load();

    return () => {
      if (chainTimerRef.current) clearTimeout(chainTimerRef.current);
    };
  }, []);

  const load = async () => {
    try {
      setLoading(true);
      const res = await ManufacturerProductService.listProducts();
      setProducts(res.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: z.infer<typeof productSchema>) => {
    try {
      setLoading(true);
      await ManufacturerProductService.createProduct({
        productName: values.productName,
        productDescription: values.productDescription || undefined,
        productImage: values.productImage || undefined,
        productionDate: values.productionDate || undefined,
        productionBatch: values.productionBatch || undefined,
      });
      toast.success("Product created");
      setCreateOpen(false);
      form.reset();
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  const openView = (prod: any) => {
    setSelected(prod);
    setViewOpen(true);
  };

  const openEdit = (prod: any) => {
    setSelected(prod);
    editForm.reset({
      productName: prod.productName || "",
      productDescription: prod.productDescription || "",
      productImage: prod.productImage || "",
      productionDate: prod.productionDate || "",
      productionBatch: prod.productionBatch || "",
    });
    setEditOpen(true);
  };

  const handleUpdate = async (values: z.infer<typeof productSchema>) => {
    if (!selected) return;
    try {
      setLoading(true);
      await ManufacturerProductService.updateProduct(selected._id || selected.id, {
        productName: values.productName,
        productDescription: values.productDescription || undefined,
        productImage: values.productImage || undefined,
        productionDate: values.productionDate || undefined,
        productionBatch: values.productionBatch || undefined,
      });
      toast.success("Product updated");
      setEditOpen(false);
      setSelected(null);
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (prod: any) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      setLoading(true);
      await ManufacturerProductService.deleteProduct(prod._id || prod.id);
      toast.success("Product deleted");
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToChain = (prod: any) => {
    if (chainLoadingId) return;
    setChainOpen(false);
    setChainProduct(null);
    setQrDataUrl("");
    const id = prod._id || prod.id;
    setChainLoadingId(id);

    chainTimerRef.current = setTimeout(() => {
      setChainProduct({ id, name: prod.productName });
      setChainOpen(true);
      setChainLoadingId(null);
      generateQrCode(id);
    }, 3000);
  };

  const generateQrCode = async (value: string) => {
    try {
      const QRCode = await import("qrcode");
      const url = await QRCode.toDataURL(value, { margin: 1 });
      setQrDataUrl(url);
    } catch (err) {
      console.error("Failed to generate QR:", err);
      setQrDataUrl("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Products</h2>
          <p className="text-muted-foreground">Create and manage products.</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Product</DialogTitle>
              <DialogDescription>Enter product details.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Chamomile Tea" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Herbal calming blend" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://cdn.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="productionDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Production Date</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productionBatch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Batch</FormLabel>
                        <FormControl>
                          <Input placeholder="BATCH-01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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

      {loading && products.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : products.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">No products yet. Create one.</CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((prod) => (
            <Card key={prod._id || prod.id}>
              <CardHeader>
                <CardTitle className="text-lg">{prod.productName}</CardTitle>
                <CardDescription>{prod.productionBatch || "—"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {prod.productDescription && <p className="text-sm text-muted-foreground">{prod.productDescription}</p>}
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => openView(prod)}>
                    <Eye className="size-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => openEdit(prod)}>
                    <Edit className="size-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleAddToChain(prod)}
                    disabled={!!chainLoadingId}
                  >
                    {chainLoadingId === (prod._id || prod.id) ? (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" />
                        Preparing ID...
                      </>
                    ) : (
                      "Add to Chain"
                    )}
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(prod)}>
                    <Trash className="size-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* View Dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">Name:</span> {selected.productName}</p>
              {selected.productDescription && <p className="text-sm"><span className="font-medium">Description:</span> {selected.productDescription}</p>}
              {selected.productImage && <p className="text-sm break-all"><span className="font-medium">Image:</span> {selected.productImage}</p>}
              {selected.productionDate && <p className="text-sm"><span className="font-medium">Production Date:</span> {selected.productionDate}</p>}
              {selected.productionBatch && <p className="text-sm"><span className="font-medium">Batch:</span> {selected.productionBatch}</p>}
              <p className="text-sm"><span className="font-medium">ID:</span> {selected._id || selected.id}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Chain Dialog */}
      <Dialog open={chainOpen} onOpenChange={setChainOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Chain ID</DialogTitle>
            <DialogDescription>Use this ID to add the product to the blockchain.</DialogDescription>
          </DialogHeader>
          {chainProduct && (
            <div className="space-y-2">
              {chainProduct.name && (
                <p className="text-sm text-muted-foreground">
                  Product: <span className="text-foreground font-semibold">{chainProduct.name}</span>
                </p>
              )}
              <div className="bg-muted rounded-md px-3 py-2 border border-border">
                <p className="text-sm font-mono break-all">{chainProduct.id}</p>
              </div>
              {qrDataUrl ? (
                <div className="flex flex-col items-center gap-2">
                  <img src={qrDataUrl} alt="QR Code" className="w-32 h-32" />
                  <p className="text-xs text-muted-foreground">Scan to reference this ID</p>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Generating QR...</p>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setChainOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Update product details.</DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleUpdate)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Chamomile Tea" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="productDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Herbal calming blend" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="productImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://cdn.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="productionDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Production Date</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="productionBatch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Batch</FormLabel>
                      <FormControl>
                        <Input placeholder="BATCH-01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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

