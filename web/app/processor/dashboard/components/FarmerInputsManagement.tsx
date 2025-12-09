"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { ProcessorFarmerInputService } from "@/services/processor/farmer-input.processor";
import { ProcessorInventoryService } from "@/services/processor/inventory.processor";
import { Plus, Eye, Loader2, Users, Search } from "lucide-react";

const addFarmerInputSchema = z.object({
  inventoryID: z.string().min(1, "Inventory ID is required"),
  quantity: z.string().min(1, "Quantity is required"),
  eventId: z.string().min(1, "Event ID is required"),
  specie: z.string().optional(),
});

const searchByEventSchema = z.object({
  eventId: z.string().min(1, "Event ID is required"),
});

export default function FarmerInputsManagement() {
  const [farmerInputs, setFarmerInputs] = useState<any[]>([]);
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [selectedInput, setSelectedInput] = useState<any>(null);
  const [selectedInventoryId, setSelectedInventoryId] = useState<string>("");

  const addForm = useForm<z.infer<typeof addFarmerInputSchema>>({
    resolver: zodResolver(addFarmerInputSchema),
    defaultValues: {
      inventoryID: "",
      quantity: "",
      eventId: "",
      specie: "",
    },
  });

  const searchForm = useForm<z.infer<typeof searchByEventSchema>>({
    resolver: zodResolver(searchByEventSchema),
    defaultValues: {
      eventId: "",
    },
  });

  useEffect(() => {
    loadInventories();
  }, []);

  const loadInventories = async () => {
    try {
      const res = await ProcessorInventoryService.listInventories();
      setInventories(res.data || []);
    } catch (err: any) {
      console.error("Failed to load inventories:", err);
    }
  };

  const loadFarmerInputs = async (inventoryId: string) => {
    try {
      setLoading(true);
      const res = await ProcessorFarmerInputService.listFarmerInputsByInventory(inventoryId);
      setFarmerInputs(res.data || []);
      setSelectedInventoryId(inventoryId);
    } catch (err: any) {
      toast.error(err.message || "Failed to load farmer inputs");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (values: z.infer<typeof addFarmerInputSchema>) => {
    try {
      setLoading(true);
      await ProcessorFarmerInputService.addFarmerInput(values);
      toast.success("Farmer input added successfully");
      setAddDialogOpen(false);
      addForm.reset();
      if (selectedInventoryId) {
        loadFarmerInputs(selectedInventoryId);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to add farmer input");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchByEvent = async (values: z.infer<typeof searchByEventSchema>) => {
    try {
      setLoading(true);
      const res = await ProcessorFarmerInputService.getFarmerInputByEventId(values.eventId);
      setSelectedInput(res.data);
      setViewDialogOpen(true);
      setSearchDialogOpen(false);
      searchForm.reset();
    } catch (err: any) {
      toast.error(err.message || "Failed to find farmer input");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (input: any) => {
    setSelectedInput(input);
    setViewDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Farmer Inputs Management</h2>
          <p className="text-muted-foreground">Manage farmer inputs for your inventories</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Search className="size-4 mr-2" />
                Search by Event ID
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search Farmer Input</DialogTitle>
                <DialogDescription>Enter event ID to find a farmer input</DialogDescription>
              </DialogHeader>
              <Form {...searchForm}>
                <form onSubmit={searchForm.handleSubmit(handleSearchByEvent)} className="space-y-4">
                  <FormField
                    control={searchForm.control}
                    name="eventId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter event ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setSearchDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                      Search
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="size-4 mr-2" />
                Add Farmer Input
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Farmer Input to Inventory</DialogTitle>
                <DialogDescription>Add a new farmer input to an inventory</DialogDescription>
              </DialogHeader>
              <Form {...addForm}>
                <form onSubmit={addForm.handleSubmit(handleAdd)} className="space-y-4">
                  <FormField
                    control={addForm.control}
                    name="inventoryID"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inventory ID <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select an inventory</option>
                            {inventories.map((inv) => (
                              <option key={inv._id || inv.id} value={inv._id || inv.id}>
                                {inv.inventoryName} ({inv.assignedGrade})
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={addForm.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter quantity" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={addForm.control}
                    name="eventId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event ID <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter unique event ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={addForm.control}
                    name="specie"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specie</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter specie (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                      Add
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Inventory Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Inventory</CardTitle>
          <CardDescription>Choose an inventory to view its farmer inputs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {inventories.map((inventory) => (
              <Button
                key={inventory._id || inventory.id}
                variant={selectedInventoryId === (inventory._id || inventory.id) ? "default" : "outline"}
                onClick={() => loadFarmerInputs(inventory._id || inventory.id)}
              >
                {inventory.inventoryName}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Farmer Inputs List */}
      {selectedInventoryId && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Farmer Inputs</h3>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="size-8 animate-spin text-muted-foreground" />
            </div>
          ) : farmerInputs.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Users className="size-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No farmer inputs found for this inventory.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {farmerInputs.map((input) => (
                <Card key={input._id || input.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">Event ID: {input.eventId}</CardTitle>
                    <CardDescription>Quantity: {input.quantity}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {input.specie && <p className="text-sm text-muted-foreground mb-2">Specie: {input.specie}</p>}
                    <Button variant="outline" size="sm" onClick={() => handleView(input)} className="w-full">
                      <Eye className="size-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Farmer Input Details</DialogTitle>
          </DialogHeader>
          {selectedInput && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Event ID</p>
                  <p className="text-foreground">{selectedInput.eventId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Quantity</p>
                  <p className="text-foreground">{selectedInput.quantity}</p>
                </div>
                {selectedInput.specie && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Specie</p>
                    <p className="text-foreground">{selectedInput.specie}</p>
                  </div>
                )}
                {selectedInput.inventoryID && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Inventory ID</p>
                    <p className="text-foreground">{selectedInput.inventoryID}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

