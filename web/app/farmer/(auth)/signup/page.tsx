"use client"

import Accessbility from "@/components/core/Navbar/Access"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronLeft, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { FarmerAuthService } from "@/services/farmer/auth.farmer"
import { useTranslation } from "react-i18next"
import "@/i18n/index"

import { Auth } from "@/lib/auth"

// ✅ Zod validation schema
const SignupSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  mobileNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
})

const OtpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export default function Page() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"signup" | "otp">("signup")
  const [loading, setLoading] = useState(false);
  const [mobile , setMobileNumber] = useState("");


 
  // --- Signup form ---
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
    },
  })

  // --- OTP form ---
  const otpForm = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
    },
  })

  const handleSignup = async (values: z.infer<typeof SignupSchema>) => {
    try {
      setLoading(true)
      const res = await FarmerAuthService.signupFarmer(values.fullName, "+91"+values.mobileNumber)
      setMobileNumber("+91"+values.mobileNumber);
      if (res?.msg) {
        toast.info(res.msg)
      } else {
        toast.success("OTP sent successfully!")
      }
  
     
      if (!res?.msg?.toLowerCase().includes("exists")) {
        setActiveTab("otp")
      }
    } catch (err: any) {
      console.error(err)
      const msg =
        err?.response?.data?.msg ||
        err?.message ||
        "Failed to send OTP. Try again."
      toast.error(msg);
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  


  const handleVerifyOtp = async (values: z.infer<typeof OtpSchema>) => {
    try {
      setLoading(true)
      const res = await FarmerAuthService.verifyOtp(mobile , values.otp);
      Auth.setToken(res.token)
      toast.success("OTP verified successfully!")
      router.push("/dashboard") 
    } catch (err) {
      console.error(err)
      toast.error("Invalid OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full mx-auto max-w-6xl border-l border-r border-border">
      <Accessbility />
      <div className="h-screen w-full flex flex-col gap-6">
        {/* Header */}
        <div className="border-b border-primary/30 h-12 flex items-center px-2 justify-between">
          <div className="h-full flex items-center justify-center">
            <Button onClick={() => router.back()} variant="secondary" size="sm">
              <ChevronLeft className="size-4" />
              <span className="md:flex hidden">{t("farmer.login.goback")}</span>
            </Button>
          </div>
          <div className="md:text-lg text-sm font-semibold">{t("farmer.login.farmer")}</div>
          <div></div>
        </div>

        {/* Content */}
        <div className="h-full flex md:items-center justify-center w-full">
          <div className="mx-auto max-w-sm w-full">
            <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-lg">
              <CardHeader>
                <CardTitle>
                  {activeTab === "signup" ? "Create a new account" : "Enter OTP"}
                </CardTitle>
                <CardDescription>
                  {activeTab === "signup"
                    ? "Enter your details to get started"
                    : "We’ve sent a 6-digit OTP to your mobile number"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs value={activeTab} className="w-full">
                  {/* --- SIGNUP TAB --- */}
                  <TabsContent value="signup">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your 10-digit mobile number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex gap-2 bg-green-300 dark:bg-green-700 border border-border px-2 py-1.5 rounded-md text-sm items-center">
                          <Check className="size-4" /> Protected by Rate Limits
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                          {loading ? <Loader2 className="size-4 animate-spin" /> : "Get OTP"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>

                  {/* --- OTP TAB --- */}
                  <TabsContent value="otp">
                    <Form {...otpForm}>
                      <form onSubmit={otpForm.handleSubmit(handleVerifyOtp)} className="space-y-4">
                        <FormField
                          control={otpForm.control}
                          name="otp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Enter OTP</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter the 6-digit OTP" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={loading}>
                          {loading ? <Loader2 className="size-4 animate-spin" /> : "Verify OTP"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant="ghost">
                  Already have an account?
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
