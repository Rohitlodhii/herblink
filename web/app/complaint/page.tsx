"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ComplaintService } from "@/services/complaint";
import { Complaint } from "@/types/complaint";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, RefreshCw } from "lucide-react";

const complaintSchema = z.object({
  name: z.string().min(1, "Name is required"),
  complaintType: z.string().min(1, "Complaint type is required"),
  complaintImage: z
    .string()
    .url("Invalid image URL")
    .optional()
    .or(z.literal(""))
    .transform((val) => (val ? val : undefined)),
  description: z.string().optional(),
});

type ComplaintFormValues = z.infer<typeof complaintSchema>;

export default function ComplaintPage() {
  const [submitting, setSubmitting] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const form = useForm<ComplaintFormValues>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      name: "",
      complaintType: "",
      complaintImage: "",
      description: "",
    },
  });

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      setLoadingList(true);
      const res = await ComplaintService.list();
      setComplaints(res.data || []);
    } catch (err: any) {
      toast.error(err?.message || "Failed to load complaints");
    } finally {
      setLoadingList(false);
    }
  };

  const onSubmit = async (values: ComplaintFormValues) => {
    try {
      setSubmitting(true);
      await ComplaintService.create(values);
      toast.success("Complaint submitted");
      form.reset({ name: "", complaintType: "", complaintImage: "", description: "" });
      loadComplaints();
    } catch (err: any) {
      toast.error(err?.message || "Failed to submit complaint");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full p-4 md:p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Submit a Complaint</h1>
        <p className="text-muted-foreground text-sm">Provide details so our team can follow up.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Complaint Form</CardTitle>
          <CardDescription>Fields marked * are required.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complaintType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complaint Type *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Delay, Quality issue" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complaintImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complaint Image (URL)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
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
                      <textarea
                        {...field}
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Add more context (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2">
                <Button type="submit" disabled={submitting}>
                  {submitting && <Loader2 className="size-4 mr-2 animate-spin" />}
                  Submit Complaint
                </Button>
                <Button type="button" variant="outline" onClick={loadComplaints} disabled={loadingList}>
                  <RefreshCw className={`size-4 mr-2 ${loadingList ? "animate-spin" : ""}`} />
                  Refresh list
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Complaints</CardTitle>
          <CardDescription>Newest submissions first.</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingList ? (
            <div className="flex items-center text-muted-foreground">
              <Loader2 className="size-4 mr-2 animate-spin" />
              Loading complaints...
            </div>
          ) : complaints.length === 0 ? (
            <p className="text-sm text-muted-foreground">No complaints yet.</p>
          ) : (
            <div className="space-y-3">
              {complaints.map((item) => (
                <div key={item.id} className="border rounded-md p-3 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{new Date(item.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="text-sm">Type: {item.complaintType}</div>
                  {item.description && <div className="text-sm text-muted-foreground">Description: {item.description}</div>}
                  {item.complaintImage && (
                    <a
                      className="text-xs text-primary underline"
                      href={item.complaintImage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View image
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

