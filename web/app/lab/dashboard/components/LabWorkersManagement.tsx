"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LabWorkerService } from "@/services/lab/worker.lab";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

const workerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  workerId: z.string().min(1, "Worker ID is required"),
  role: z.enum(["ADMIN", "WORKER"], { errorMap: () => ({ message: "Role must be ADMIN or WORKER" }) }),
  desc: z.string().optional(),
});

export default function LabWorkersManagement() {
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [localWorkers, setLocalWorkers] = useState<any[]>([]);

  const form = useForm<z.infer<typeof workerSchema>>({
    resolver: zodResolver(workerSchema),
    defaultValues: {
      name: "",
      workerId: "",
      role: "WORKER",
      desc: "",
    },
  });

  const handleCreate = async (values: z.infer<typeof workerSchema>) => {
    try {
      setLoading(true);
      await LabWorkerService.addWorker({
        name: values.name,
        workerId: values.workerId,
        role: values.role,
        desc: values.desc || undefined,
      });
      toast.success("Worker added");
      setLocalWorkers((prev) => [...prev, values]);
      setCreateOpen(false);
      form.reset({ name: "", workerId: "", role: "WORKER", desc: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to add worker");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>Lab Workers</CardTitle>
          <CardDescription>Add workers to your lab.</CardDescription>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Worker
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Lab Worker</DialogTitle>
              <DialogDescription>Enter worker details.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Worker name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="workerId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Worker ID *</FormLabel>
                      <FormControl>
                        <Input placeholder="Unique worker ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="ADMIN">ADMIN</option>
                          <option value="WORKER">WORKER</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional description" {...field} />
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
                    Add Worker
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {localWorkers.length === 0 ? (
          <p className="text-muted-foreground text-sm">Workers will appear here after adding. (No list endpoint provided.)</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {localWorkers.map((w, idx) => (
              <div key={idx} className="border rounded-md p-3 space-y-1">
                <p className="text-sm font-semibold">{w.name}</p>
                <p className="text-xs text-muted-foreground">ID: {w.workerId}</p>
                <p className="text-xs text-muted-foreground">Role: {w.role}</p>
                {w.desc && <p className="text-xs text-muted-foreground">Desc: {w.desc}</p>}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

