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
import { ManufacturerHerbInventoryService } from "@/services/manufacturer/herb-inventory.manufacturer";
import { Loader2, Plus, Eye, Edit, Trash } from "lucide-react";
import { toast } from "sonner";

const herbSchema = z.object({
  processorInventoryId: z.string().min(1, "Processor inventory ID is required"),
  quantityReceived: z.string().min(1, "Quantity is required"),
});

export default function HerbInventoryManagement() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const form = useForm<z.infer<typeof herbSchema>>({
    resolver: zodResolver(herbSchema),
    defaultValues: {
      processorInventoryId: "",
      quantityReceived: "",
    },
  });

  const editForm = useForm<z.infer<typeof herbSchema>>({
    resolver: zodResolver(herbSchema),
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setLoading(true);
      const res = await ManufacturerHerbInventoryService.listHerbInventories();
      setItems(res.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load herb inventories");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: z.infer<typeof herbSchema>) => {
    try {
      setLoading(true);
      await ManufacturerHerbInventoryService.createHerbInventory(values);
      toast.success("Herb inventory created");
      setCreateOpen(false);
      form.reset();
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to create herb inventory");
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
      processorInventoryId: item.processorInventoryId || "",
      quantityReceived: item.quantityReceived || "",
    });
    setEditOpen(true);
  };

  const handleUpdate = async (values: z.infer<typeof herbSchema>) => {
    if (!selected) return;
    try {
      setLoading(true);
      await ManufacturerHerbInventoryService.updateById(selected._id || selected.id, values);
      toast.success("Herb inventory updated");
      setEditOpen(false);
      setSelected(null);
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to update herb inventory");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item: any) => {
    if (!window.confirm("Delete this herb inventory?")) return;
    try {
      setLoading(true);
      await ManufacturerHerbInventoryService.deleteById(item._id || item.id);
      toast.success("Herb inventory deleted");
      load();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete herb inventory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Herb Inventory</h2>
          <p className="text-muted-foreground">Track incoming herb inventories from processor.</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Herb Inventory
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Herb Inventory</DialogTitle>
              <DialogDescription>Enter herb inventory details.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="processorInventoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processor Inventory ID *</FormLabel>
                      <FormControl>
                        <Input placeholder="PROCESSOR_UUID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantityReceived"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Received *</FormLabel>
                      <FormControl>
                        <Input placeholder="50kg" {...field} />
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

      {loading && items.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">No herb inventories yet. Create one.</CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card key={item._id || item.id}>
              <CardHeader>
                <CardTitle className="text-lg">{item.quantityReceived}</CardTitle>
                <CardDescription>Processor Inv: {item.processorInventoryId}</CardDescription>
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
      )}

      {/* View Dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Herb Inventory Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">Processor Inventory ID:</span> {selected.processorInventoryId}</p>
              <p className="text-sm"><span className="font-medium">Quantity:</span> {selected.quantityReceived}</p>
              <p className="text-sm"><span className="font-medium">ID:</span> {selected._id || selected.id}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Herb Inventory</DialogTitle>
            <DialogDescription>Update herb inventory details.</DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleUpdate)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="processorInventoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processor Inventory ID *</FormLabel>
                    <FormControl>
                      <Input placeholder="PROCESSOR_UUID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="quantityReceived"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity Received *</FormLabel>
                    <FormControl>
                      <Input placeholder="50kg" {...field} />
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

