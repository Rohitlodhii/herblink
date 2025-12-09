"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { ProcessorInventoryService } from "@/services/processor/inventory.processor";
import { Plus, Edit, Eye, Loader2, Package } from "lucide-react";

const createInventorySchema = z.object({
  inventoryName: z.string().min(1, "Inventory name is required"),
  assignedGrade: z.string().min(1, "Assigned grade is required"),
  specie: z.string().min(1, "Specie is required"),
  moisture: z.string().optional(),
  soilType: z.string().optional(),
  WaterType: z.string().optional(),
  Season: z.string().optional(),
  Location: z.string().optional(),
});

const updateInventorySchema = z.object({
  inventoryName: z.string().optional(),
  assignedGrade: z.string().optional(),
  processinglist: z.string().optional(),
  specie: z.string().optional(),
  finalQuantity: z.string().optional(),
  sendedToLab: z.string().optional(),
  isprocessingDone: z.boolean().optional(),
  moisture: z.string().optional(),
  soilType: z.string().optional(),
  WaterType: z.string().optional(),
  Season: z.string().optional(),
  Location: z.string().optional(),
});

export default function InventoryManagement() {
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState<any>(null);
  const [chainDialogOpen, setChainDialogOpen] = useState(false);
  const [chainInventory, setChainInventory] = useState<{ id: string; name?: string } | null>(null);
  const [chainLoadingId, setChainLoadingId] = useState<string | null>(null);
  const chainTimerRef = useRef<NodeJS.Timeout | null>(null);

  const createForm = useForm<z.infer<typeof createInventorySchema>>({
    resolver: zodResolver(createInventorySchema),
    defaultValues: {
      inventoryName: "",
      assignedGrade: "",
      specie: "",
      moisture: "",
      soilType: "",
      WaterType: "",
      Season: "",
      Location: "",
    },
  });

  const updateForm = useForm<z.infer<typeof updateInventorySchema>>({
    resolver: zodResolver(updateInventorySchema),
    defaultValues: {},
  });

  useEffect(() => {
    loadInventories();

    return () => {
      if (chainTimerRef.current) {
        clearTimeout(chainTimerRef.current);
      }
    };
  }, []);

  const loadInventories = async () => {
    try {
      setLoading(true);
      const res = await ProcessorInventoryService.listInventories();
      setInventories(res.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load inventories");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: z.infer<typeof createInventorySchema>) => {
    try {
      setLoading(true);
      await ProcessorInventoryService.createInventory(values);
      toast.success("Inventory created successfully");
      setCreateDialogOpen(false);
      createForm.reset();
      loadInventories();
    } catch (err: any) {
      toast.error(err.message || "Failed to create inventory");
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (id: string) => {
    try {
      setLoading(true);
      const res = await ProcessorInventoryService.getInventoryById(id);
      setSelectedInventory(res.data);
      setViewDialogOpen(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to load inventory");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (inventory: any) => {
    setSelectedInventory(inventory);
    updateForm.reset({
      inventoryName: inventory.inventoryName || "",
      assignedGrade: inventory.assignedGrade || "",
      processinglist: inventory.processinglist || "",
      specie: inventory.specie || "",
      finalQuantity: inventory.finalQuantity || "",
      sendedToLab: inventory.sendedToLab || "",
      isprocessingDone: inventory.isprocessingDone || false,
      moisture: inventory.moisture || "",
      soilType: inventory.soilType || "",
      WaterType: inventory.WaterType || "",
      Season: inventory.Season || "",
      Location: inventory.Location || "",
    });
    setEditDialogOpen(true);
  };

  const handleAddToChain = (inventory: any) => {
    if (chainLoadingId) return;

    setChainDialogOpen(false);
    setChainInventory(null);
    const currentId = inventory._id || inventory.id;
    setChainLoadingId(currentId);

    chainTimerRef.current = setTimeout(() => {
      setChainInventory({
        id: currentId,
        name: inventory.inventoryName,
      });
      setChainDialogOpen(true);
      setChainLoadingId(null);
    }, 3000);
  };

  const handleUpdate = async (values: z.infer<typeof updateInventorySchema>) => {
    if (!selectedInventory) return;
    try {
      setLoading(true);
      await ProcessorInventoryService.updateInventory(selectedInventory._id || selectedInventory.id, values);
      toast.success("Inventory updated successfully");
      setEditDialogOpen(false);
      setSelectedInventory(null);
      loadInventories();
    } catch (err: any) {
      toast.error(err.message || "Failed to update inventory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
          <p className="text-muted-foreground">Manage your processing inventories</p>
        </div>
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Create Inventory
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Inventory</DialogTitle>
              <DialogDescription>Fill in the details to create a new inventory</DialogDescription>
            </DialogHeader>
            <Form {...createForm}>
              <form onSubmit={createForm.handleSubmit(handleCreate)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="inventoryName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inventory Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter inventory name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="assignedGrade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assigned Grade <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter assigned grade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="specie"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specie <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter specie" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="moisture"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Moisture</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter moisture" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="soilType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Soil Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter soil type" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="WaterType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Water Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter water type" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="Season"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Season</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter season" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="Location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
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

      {loading && inventories.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : inventories.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="size-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No inventories found. Create your first inventory.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventories.map((inventory) => (
            <Card key={inventory._id || inventory.id}>
              <CardHeader>
                <CardTitle className="text-lg">{inventory.inventoryName}</CardTitle>
                <CardDescription>
                  Grade: {inventory.assignedGrade} | Specie: {inventory.specie}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {inventory.moisture && <p className="text-sm text-muted-foreground">Moisture: {inventory.moisture}</p>}
                  {inventory.Location && <p className="text-sm text-muted-foreground">Location: {inventory.Location}</p>}
                  {inventory.isprocessingDone !== undefined && (
                    <p className="text-sm">
                      Status: <span className={inventory.isprocessingDone ? "text-green-500" : "text-yellow-500"}>
                        {inventory.isprocessingDone ? "Processing Done" : "In Progress"}
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleView(inventory._id || inventory.id)}>
                    <Eye className="size-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleEdit(inventory)}>
                    <Edit className="size-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleAddToChain(inventory)}
                    disabled={!!chainLoadingId}
                  >
                    {chainLoadingId === (inventory._id || inventory.id) ? (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" />
                        Preparing ID...
                      </>
                    ) : (
                      "Add to Chain"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Inventory Details</DialogTitle>
          </DialogHeader>
          {selectedInventory && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Inventory Name</p>
                  <p className="text-foreground">{selectedInventory.inventoryName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Assigned Grade</p>
                  <p className="text-foreground">{selectedInventory.assignedGrade}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Specie</p>
                  <p className="text-foreground">{selectedInventory.specie}</p>
                </div>
                {selectedInventory.moisture && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Moisture</p>
                    <p className="text-foreground">{selectedInventory.moisture}</p>
                  </div>
                )}
                {selectedInventory.soilType && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Soil Type</p>
                    <p className="text-foreground">{selectedInventory.soilType}</p>
                  </div>
                )}
                {selectedInventory.WaterType && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Water Type</p>
                    <p className="text-foreground">{selectedInventory.WaterType}</p>
                  </div>
                )}
                {selectedInventory.Season && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Season</p>
                    <p className="text-foreground">{selectedInventory.Season}</p>
                  </div>
                )}
                {selectedInventory.Location && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">{selectedInventory.Location}</p>
                  </div>
                )}
                {selectedInventory.finalQuantity && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Final Quantity</p>
                    <p className="text-foreground">{selectedInventory.finalQuantity}</p>
                  </div>
                )}
                {selectedInventory.sendedToLab && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Sent to Lab</p>
                    <p className="text-foreground">{selectedInventory.sendedToLab}</p>
                  </div>
                )}
                {selectedInventory.isprocessingDone !== undefined && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Processing Status</p>
                    <p className={selectedInventory.isprocessingDone ? "text-green-500" : "text-yellow-500"}>
                      {selectedInventory.isprocessingDone ? "Done" : "In Progress"}
                    </p>
                  </div>
                )}
              </div>
              {selectedInventory.Items && selectedInventory.Items.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Farmer Inputs</p>
                  <div className="space-y-2">
                    {selectedInventory.Items.map((item: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="p-3">
                          <p className="text-sm">Event ID: {item.eventId}</p>
                          <p className="text-sm">Quantity: {item.quantity}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add to Chain Dialog */}
      <Dialog open={chainDialogOpen} onOpenChange={setChainDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inventory Chain ID</DialogTitle>
            <DialogDescription>Use this ID to add the inventory to the chain.</DialogDescription>
          </DialogHeader>
          {chainInventory && (
            <div className="space-y-2">
              {chainInventory.name && (
                <p className="text-sm text-muted-foreground">
                  Inventory: <span className="text-foreground font-semibold">{chainInventory.name}</span>
                </p>
              )}
              <div className="bg-muted rounded-md px-3 py-2 border border-border">
                <p className="text-sm font-mono break-all">{chainInventory.id}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setChainDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Update Inventory</DialogTitle>
            <DialogDescription>Update the inventory details</DialogDescription>
          </DialogHeader>
          <Form {...updateForm}>
            <form onSubmit={updateForm.handleSubmit(handleUpdate)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={updateForm.control}
                  name="inventoryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inventory Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter inventory name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="assignedGrade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assigned Grade</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter assigned grade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="specie"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specie</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter specie" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="processinglist"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processing List</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter processing list" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="finalQuantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Final Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter final quantity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="sendedToLab"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sent to Lab</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter lab info" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="isprocessingDone"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="rounded"
                        />
                      </FormControl>
                      <FormLabel>Processing Done</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="moisture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Moisture</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter moisture" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="soilType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soil Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter soil type" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="WaterType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Water Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter water type" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="Season"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Season</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter season" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={updateForm.control}
                  name="Location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
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

