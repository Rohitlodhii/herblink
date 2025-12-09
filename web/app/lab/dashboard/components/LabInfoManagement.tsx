"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LabInfoService } from "@/services/lab/info.lab";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const infoSchema = z.object({
  address: z.string().optional(),
  type: z.string().optional(),
  labName: z.string().optional(),
  nablCertificateNo: z.string().optional(),
  nablExp: z.string().optional(),
  isFssaiReq: z.boolean().optional(),
  fssaiReqNo: z.string().optional(),
  about: z.string().optional(),
});

export default function LabInfoManagement() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof infoSchema>>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      address: "",
      type: "",
      labName: "",
      nablCertificateNo: "",
      nablExp: "",
      isFssaiReq: false,
      fssaiReqNo: "",
      about: "",
    },
  });

  const handleSave = async (values: z.infer<typeof infoSchema>) => {
    try {
      setLoading(true);
      await LabInfoService.saveInfo(values);
      toast.success("Lab info saved");
    } catch (err: any) {
      toast.error(err.message || "Failed to save lab info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Info</CardTitle>
        <CardDescription>Add or update lab information.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="labName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lab Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter lab name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type (GOVT / PVT)</FormLabel>
                    <FormControl>
                      <Input placeholder="GOVT or PVT" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nablCertificateNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NABL Certificate No</FormLabel>
                    <FormControl>
                      <Input placeholder="Certificate number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nablExp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NABL Expiry</FormLabel>
                    <FormControl>
                      <Input placeholder="Expiry date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fssaiReqNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FSSAI Req No</FormLabel>
                    <FormControl>
                      <Input placeholder="FSSAI requirement number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Input placeholder="Short description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFssaiReq"
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
                    <FormLabel className="mt-0">Is FSSAI Required?</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
              Save Info
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

