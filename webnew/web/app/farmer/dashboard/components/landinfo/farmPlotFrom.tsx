"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LatLngLiteral } from "leaflet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AdvancedLandMap from "./mapcomponent"; // <-- map component
import { FarmerLicense } from "@/services/farmer/license.farmer";

export const FarmSchema = z.object({
  khasraNumber: z.string().min(1, "Khasra number is required"),
  totalHectare: z.number().positive("Area must be greater than 0"),
  polygon: z
    .array(
      z.object({
        lat: z.number(),
        lng: z.number(),
      })
    )
    .min(3, "Please draw an area on the map"),
});

type FarmFormValues = z.infer<typeof FarmSchema>;

interface Props {
  index: number;
  onRemove?: () => void;
}

export function FarmPlotForm({ index, onRemove }: Props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FarmFormValues>({
    resolver: zodResolver(FarmSchema),
    defaultValues: {
      khasraNumber: "",
      totalHectare: 0,
      polygon: [],
    },
  });

  const handleShapeUpdate = (shapes: any[]) => {
    const polygon = shapes.find((s: any) => s.type === "polygon");
    if (!polygon) return;

    // calculate area from polygon
    const points = polygon.points;
    const turf = require("@turf/turf");
    const poly = turf.polygon([
      [...points.map((p: any) => [p.lng, p.lat]), [points[0].lng, points[0].lat]],
    ]);
    const areaHa = turf.area(poly) / 10000;

    form.setValue("polygon", points, { shouldValidate: true });
    form.setValue("totalHectare", Number(areaHa.toFixed(4)), {
      shouldValidate: true,
    });

    toast.success("Polygon updated from map");
    setMapOpen(false);
  };

  const submitFarm = async (values: FarmFormValues) => {
    setLoading(true);
    try {
      const res = await FarmerLicense.addLandInfo(values);
      toast.success("Farm saved successfully");
      setConfirmOpen(false);
      form.reset({ khasraNumber: "", totalHectare: 0, polygon: [] });
    } catch {
      toast.error("Failed to save farm");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="border rounded-lg p-4 space-y-4 mb-4 bg-card ">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Add New Farm</h3>
          {onRemove && (
            <Button variant="ghost" size="sm" onClick={onRemove}>
              Remove
            </Button>
          )}
        </div>

        <Form {...form}>
          <form
           onSubmit={async (e) => {
            e.preventDefault();
            const valid = await form.trigger();
          
            if (!valid) {
              toast.error("Please complete all required fields");
              return;
            }
          
            setConfirmOpen(true);
          }}
          
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="khasraNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Khasra Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Khasra number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* AREA — read only */}
            <FormField
              control={form.control}
              name="totalHectare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area (hectares, auto calculated)</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value || ""}
                      readOnly
                      placeholder="Draw the area on the map"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to open map */}
            <FormField
              control={form.control}
              name="polygon"
              render={() => (
                <FormItem>
                  <FormLabel>Farm Area</FormLabel>
                  <div className="flex flex-col gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setMapOpen(true)}
                    >
                      Open Map to Draw Farm Area
                    </Button>
                    {form.watch("polygon")?.length > 0 && (
                      <p className="text-xs text-green-600">
                        ✓ Polygon selected ({form.watch("polygon")?.length} points)
                      </p>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Saving..." : "Save this farm"}
            </Button>
          </form>
        </Form>
      </div>

      {/* MAP DRAWING DIALOG */}
      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="max-w-6xl w-full h-[700px]">
          <DialogHeader>
            <DialogTitle>Draw / Edit Farm Area</DialogTitle>
          </DialogHeader>

          <div style={{ width: "100%", height: "600px" }}>
            <AdvancedLandMap onShapesChange={handleShapeUpdate} />
          </div>
        </DialogContent>
      </Dialog>

      {/* CONFIRM SAVE DIALOG */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen} >
        <DialogContent className="p-4 w-full mx-auto max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm farm submission</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This will save Farm #{index + 1} with the selected polygon and Khasra number.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setConfirmOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button onClick={form.handleSubmit(submitFarm)} disabled={loading}>
              {loading ? "Please wait..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
