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
import { cn } from "@/lib/utils";
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
  // Required fields
  fullname: z.string().min(3, "Full name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  address: z.string().min(10, "Address is too short"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  farmerType: z
    .string()
    .min(1, "Farmer type is required")
    .refine(
      (val) => val === "WILDCOLLECTOR" || val === "FARMER",
      {
        message: "Please select a valid farmer type",
      }
    ),
  // Optional fields
  fatherName: z.string().optional(),
  gender: z.string().optional(),
  aadharNumber: z.string().optional(),
  annualIncome: z.string().optional(),
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
      farmerType: "",
      fatherName: "",
      gender: "",
      aadharNumber: "",
      annualIncome: "",
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
      {/* Form Provider FIXED */}
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpenConfirm(true);
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mx-auto max-w-3xl"
        >
          {/* Full Name */}
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
  
          {/* DOB */}
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
  
          {/* Address (full width) */}
          <div className="md:col-span-2">
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
          </div>
  
          {/* Password */}
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
  
          {/* Farmer Type */}
          <FormField
            control={form.control}
            name="farmerType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Farmer Type <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className={cn(
                      "h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    )}
                  >
                    <option value="">Select farmer type</option>
                    <option value="FARMER">Farmer</option>
                    <option value="WILDCOLLECTOR">Wild Collector</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Father Name */}
          <FormField
            control={form.control}
            name="fatherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter father's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Aadhar */}
          <FormField
            control={form.control}
            name="aadharNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aadhar Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Aadhar number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Annual Income */}
          <FormField
            control={form.control}
            name="annualIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual Income</FormLabel>
                <FormControl>
                  <Input placeholder="Enter annual income" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
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
            <Button onClick={form.handleSubmit(onSubmit)} disabled={loading}>
              {loading ? "Please wait..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
  
}
