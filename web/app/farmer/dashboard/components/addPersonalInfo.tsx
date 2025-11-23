"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
} from "@/components/ui/dialog";
import { FarmerLicense } from "@/services/farmer/license.farmer";
// import { FarmerLicense } from "@/services/farmer/FarmerLicense"; // <-- adjust path

// Validation schema
export const PersonalInfoSchema = z.object({
  fullname: z.string().min(3, "Full name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  address: z.string().min(10, "Address is too short"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function PersonalInfoForm() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof PersonalInfoSchema>>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {
      fullname: "",
      dob: "",
      address: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof PersonalInfoSchema>) => {
    setLoading(true);
    try {
      const res = await FarmerLicense.addPersonalInfo(data); // <-- API call
      toast.success("Personal info successfully submitted!");
      setOpenConfirm(false);
      form.reset();
    } catch (err: any) {
      toast.error(err?.response?.data?.msg || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpenConfirm(true);
          }}
          className="space-y-5 w-full mx-auto max-w-lg"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Create Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
      {/* Confirm Dialog */}
      <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm submission?</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            You are about to submit your personal details.
          </p>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setOpenConfirm(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
