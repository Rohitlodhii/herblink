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
import { LabProcessorInputService } from "@/services/lab/processor-input.lab";
import { Loader2, Plus, Eye, Edit, RefreshCw, Link2 } from "lucide-react";
import { toast } from "sonner";

const createSchema = z.object({
  processorInventoryId: z.string().min(1, "Processor inventory ID is required"),
  reportpath: z.string().optional(),
  description: z.string().optional(),
  isDone: z.boolean().optional(),
});

const updateSchema = z.object({
  reportpath: z.string().optional(),
  description: z.string().optional(),
  isDone: z.boolean().optional(),
});

export default function LabProcessorInputs() {
  const [items, setItems] = useState<any[]>([]);
  const [pending, setPending] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [chainOpen, setChainOpen] = useState(false);
  const [chainItem, setChainItem] = useState<{ id: string; name?: string } | null>(null);
  const [chainLoadingId, setChainLoadingId] = useState<string | null>(null);
  const chainTimerRef = useRef<NodeJS.Timeout | null>(null);

  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      processorInventoryId: "",
      reportpath: "",
      description: "",
      isDone: false,
    },
  });

  const editForm = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
  });

  useEffect(() => {
    loadAll();
    return () => {
      if (chainTimerRef.current) clearTimeout(chainTimerRef.current);
    };
  }, []);

  const loadAll = async () => {
    try {
      setLoading(true);
      const [allRes, pendingRes] = await Promise.all([
        LabProcessorInputService.listProcessorInputs(),
        LabProcessorInputService.listPendingReports(),
      ]);
      setItems(allRes.data || []);
      setPending(pendingRes.data || []);
    } catch (err: any) {
      toast.error(err.message || "Failed to load processor inputs");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: z.infer<typeof createSchema>) => {
    try {
      setLoading(true);
      await LabProcessorInputService.addProcessorInput({
        processorInventoryId: values.processorInventoryId,
        reportpath: values.reportpath || undefined,
        description: values.description || undefined,
        isDone: values.isDone,
      });
      toast.success("Processor input added");
      setCreateOpen(false);
      form.reset({ processorInventoryId: "", reportpath: "", description: "", isDone: false });
      loadAll();
    } catch (err: any) {
      toast.error(err.message || "Failed to add processor input");
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
      reportpath: item.reportpath || "",
      description: item.description || "",
      isDone: item.isDone ?? false,
    });
    setEditOpen(true);
  };

  const handleUpdate = async (values: z.infer<typeof updateSchema>) => {
    if (!selected) return;
    try {
      setLoading(true);
      await LabProcessorInputService.updateProcessorInput(selected._id || selected.id, {
        reportpath: values.reportpath || undefined,
        description: values.description || undefined,
        isDone: values.isDone,
      });
      toast.success("Processor input updated");
      setEditOpen(false);
      setSelected(null);
      loadAll();
    } catch (err: any) {
      toast.error(err.message || "Failed to update processor input");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToChain = (item: any) => {
    if (chainLoadingId) return;
    setChainOpen(false);
    setChainItem(null);
    const id = item._id || item.id;
    setChainLoadingId(id);
    chainTimerRef.current = setTimeout(() => {
      setChainItem({ id, name: item.processorInventoryId });
      setChainOpen(true);
      setChainLoadingId(null);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Processor Inputs</h2>
          <p className="text-muted-foreground">Add and manage processor inputs and attach reports.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={loadAll}>
            <RefreshCw className="size-4 mr-2" />
            Refresh
          </Button>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="size-4 mr-2" />
                Add Processor Input
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle>Add Lab Processor Input</DialogTitle>
                <DialogDescription>Link a processor inventory and optionally attach report details.</DialogDescription>
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
                          <Input placeholder="processor inventory id" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reportpath"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Report File (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const randomKey = `report-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
                                field.onChange(randomKey);
                              } else {
                                field.onChange("");
                              }
                            }}
                          />
                        </FormControl>
                        {field.value ? (
                          <p className="text-xs text-muted-foreground break-all mt-1">Assigned report key: {field.value}</p>
                        ) : null}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isDone"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 rounded border-input"
                          />
                        </FormControl>
                        <FormLabel className="mt-0">Is Done</FormLabel>
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
      </div>

      {loading && items.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">No processor inputs yet. Add one.</CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card key={item._id || item.id}>
              <CardHeader>
                <CardTitle className="text-lg">{item.processorInventoryId}</CardTitle>
                <CardDescription>{item.description || "No description"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Report: {item.reportpath || "Not provided"}</p>
                <p className="text-sm">
                  Status:{" "}
                  <span className={item.isDone ? "text-green-500" : "text-yellow-500"}>
                    {item.isDone ? "Done" : "Pending"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => openView(item)}>
                    <Eye className="size-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => openEdit(item)}>
                    <Edit className="size-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleAddToChain(item)}
                    disabled={!!chainLoadingId}
                  >
                    {chainLoadingId === (item._id || item.id) ? (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" />
                        Preparing ID...
                      </>
                    ) : (
                      <>
                        <Link2 className="size-4 mr-2" />
                        Add to Chain
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Pending reports list */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Reports</CardTitle>
          <CardDescription>Processor inputs without reportpath.</CardDescription>
        </CardHeader>
        <CardContent>
          {pending.length === 0 ? (
            <p className="text-sm text-muted-foreground">No pending reports.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {pending.map((p) => (
                <div key={p._id || p.id} className="border rounded-md p-3 space-y-1">
                  <p className="text-sm font-semibold">{p.processorInventoryId}</p>
                  <p className="text-xs text-muted-foreground">{p.description || "No description"}</p>
                  <p className="text-xs text-muted-foreground">ID: {p._id || p.id}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* View Dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Processor Input Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">Processor Inventory ID:</span> {selected.processorInventoryId}</p>
              <p className="text-sm"><span className="font-medium">Report:</span> {selected.reportpath || "Not provided"}</p>
              <p className="text-sm"><span className="font-medium">Description:</span> {selected.description || "Not provided"}</p>
              <p className="text-sm">
                <span className="font-medium">Status:</span>{" "}
                <span className={selected.isDone ? "text-green-500" : "text-yellow-500"}>
                  {selected.isDone ? "Done" : "Pending"}
                </span>
              </p>
              <p className="text-sm"><span className="font-medium">ID:</span> {selected._id || selected.id}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Processor Input</DialogTitle>
            <DialogDescription>Update report details or mark as done.</DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleUpdate)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="reportpath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report File (optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const randomKey = `report-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
                            field.onChange(randomKey);
                          } else {
                            field.onChange("");
                          }
                        }}
                      />
                    </FormControl>
                    {field.value ? (
                      <p className="text-xs text-muted-foreground break-all mt-1">Assigned report key: {field.value}</p>
                    ) : null}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="isDone"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value ?? false}
                        onChange={field.onChange}
                        className="h-4 w-4 rounded border-input"
                      />
                    </FormControl>
                    <FormLabel className="mt-0">Is Done</FormLabel>
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

      {/* Chain Dialog */}
      <Dialog open={chainOpen} onOpenChange={setChainOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Processor Input Chain ID</DialogTitle>
            <DialogDescription>Use this ID to add the processor input to the chain.</DialogDescription>
          </DialogHeader>
          {chainItem && (
            <div className="space-y-2">
              {chainItem.name && (
                <p className="text-sm text-muted-foreground">
                  Processor Inventory: <span className="text-foreground font-semibold">{chainItem.name}</span>
                </p>
              )}
              <div className="bg-muted rounded-md px-3 py-2 border border-border">
                <p className="text-sm font-mono break-all">{chainItem.id}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setChainOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

