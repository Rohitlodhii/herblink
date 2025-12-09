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
import { ProcessorPlantService } from "@/services/processor/plant.processor";
import { Edit, Building2, Loader2, Save } from "lucide-react";

const plantInfoSchema = z.object({
  estb: z.string().min(1, "Establishment date is required"),
  GSTIN: z.string().min(1, "GSTIN is required"),
  Storage: z.string().min(1, "Storage information is required"),
  herbs: z.string().min(1, "Herbs information is required"),
});

export default function PlantInfoManagement() {
  const [plantInfo, setPlantInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof plantInfoSchema>>({
    resolver: zodResolver(plantInfoSchema),
    defaultValues: {
      estb: "",
      GSTIN: "",
      Storage: "",
      herbs: "",
    },
  });

  useEffect(() => {
    loadPlantInfo();
  }, []);

  const loadPlantInfo = async () => {
    try {
      setLoading(true);
      const res = await ProcessorPlantService.getPlantInfo();
      setPlantInfo(res.data);
      if (res.data) {
        form.reset({
          estb: res.data.estb || "",
          GSTIN: res.data.GSTIN || "",
          Storage: res.data.Storage || "",
          herbs: res.data.herbs || "",
        });
      }
    } catch (err: any) {
      // If no plant info exists, that's okay - user can create it
      if (err.message && !err.message.includes("404")) {
        console.error("Failed to load plant info:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (values: z.infer<typeof plantInfoSchema>) => {
    try {
      setLoading(true);
      const res = await ProcessorPlantService.savePlantInfo(values);
      setPlantInfo(res.data);
      toast.success("Plant info saved successfully");
      setEditDialogOpen(false);
      loadPlantInfo();
    } catch (err: any) {
      toast.error(err.message || "Failed to save plant info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Processing Plant Info</h2>
          <p className="text-muted-foreground">Manage your processing plant information</p>
        </div>
        <Dialog  open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              {plantInfo ? (
                <>
                  <Edit className="size-4 mr-2" />
                  Update Plant Info
                </>
              ) : (
                <>
                  <Save className="size-4 mr-2" />
                  Create Plant Info
                </>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{plantInfo ? "Update" : "Create"} Plant Info</DialogTitle>
              <DialogDescription>
                {plantInfo ? "Update your processing plant information" : "Enter your processing plant information"}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="estb"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Establishment Date <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter establishment date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="GSTIN"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GSTIN <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter GSTIN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Storage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter storage information" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="herbs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Herbs <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter herbs information" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                    {plantInfo ? "Update" : "Create"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {loading && !plantInfo ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : plantInfo ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="size-5" />
              Plant Information
            </CardTitle>
            <CardDescription>Your processing plant details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Establishment Date</p>
                <p className="text-foreground text-lg">{plantInfo.estb}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">GSTIN</p>
                <p className="text-foreground text-lg">{plantInfo.GSTIN}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Storage</p>
                <p className="text-foreground text-lg">{plantInfo.Storage}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Herbs</p>
                <p className="text-foreground text-lg">{plantInfo.herbs}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Building2 className="size-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No plant information found.</p>
            <p className="text-sm text-muted-foreground">Click the button above to create your plant information.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

