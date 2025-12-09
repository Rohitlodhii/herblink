"use client"

import Accessbility from "@/components/core/Navbar/Access"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { FarmerAuthService } from "@/services/farmer/auth.farmer"
import { useAuthStore } from "@/store/useAuthStore"
import { useTranslation } from "react-i18next"
import "@/i18n/index"
import { Auth } from "@/lib/auth"

// ---- SCHEMAS ----
const LoginSchema = z.object({
  mobileNumber: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
})

const OtpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export default function Page() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"login" | "otp">("login")
  const [sendingOtp, setSendingOtp] = useState(false)
const [verifyingOtp, setVerifyingOtp] = useState(false)

  const [mobile, setMobile] = useState("")

  // LOGIN FORM
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      mobileNumber: "",
    },
  })

  // OTP FORM
  const otpForm = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
    },
  })

  // ---- SEND OTP ----
  const handleSendOtp = async (values : z.infer<typeof LoginSchema>) => {
    try {
      setSendingOtp(true)
  
      const mobileNumber = "+91" + values.mobileNumber
      setMobile(mobileNumber)
  
      const res = await FarmerAuthService.loginFarmer(mobileNumber)
  
      toast.success(res?.msg || "OTP sent!")
  
      setActiveTab("otp")   // <-- This was not reached due to backend error
    } catch (err) {
      toast.error("Failed to send OTP");
      setSendingOtp(false);
    } finally {
      setSendingOtp(false)
    }
  }
  

  // ---- VERIFY OTP ----
  const handleVerifyOtp = async (values : z.infer<typeof OtpSchema>) => {
    try {
      setVerifyingOtp(true)
  
      const res = await FarmerAuthService.verifyOtp(mobile, values.otp)
  
      Auth.setToken(res.token)
      toast.success("OTP verified!")
      router.push("farmer/dashboard")
    } catch (err) {
      toast.error("Invalid OTP, try again.")
    } finally {
      setVerifyingOtp(false)
    }
  }
  
  return (
    <div className="flex flex-col w-full mx-auto max-w-6xl border-l border-r border-border">
      <Accessbility />
      <div className="h-screen w-full flex flex-col gap-6">

        {/* Header */}
        <div className="border-b border-primary/30 h-12 flex items-center px-2 justify-between">
          <Button onClick={() => router.back()} variant="secondary" size="sm">
            <ChevronLeft className="size-4" />
            <span className="md:flex hidden">Go Back</span>
          </Button>
          <div className="md:text-lg text-sm font-semibold">Farmer Login</div>
          <div></div>
        </div>

        {/* Content */}
        <div className="h-full flex md:items-center justify-center w-full">
          <div className="mx-auto max-w-sm w-full">
            <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-lg">

              <CardHeader>
                <CardTitle>{activeTab === "login" ? "Login" : "Enter OTP"}</CardTitle>
                <CardDescription>
                  {activeTab === "login"
                    ? "Enter mobile number to receive OTP"
                    : "We’ve sent a 6-digit OTP to your number"}
                </CardDescription>
              </CardHeader>

              <CardContent>
              <Tabs
                value={activeTab}
                onValueChange={(v) => setActiveTab(v as "login" | "otp")}
                className="w-full"
              >



                  {/* LOGIN TAB */}
                  <TabsContent value="login">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSendOtp)} className="space-y-4">

                        <FormField
                          control={form.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="10-digit mobile number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

              <Button type="submit" className="w-full" disabled={sendingOtp}>
                {sendingOtp ? <Loader2 className="size-4 animate-spin" /> : "Send OTP"}
              </Button>

                      </form>
                    </Form>
                  </TabsContent>

                  {/* OTP TAB */}
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
                                <Input placeholder="6-digit OTP" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

<Button type="submit" className="w-full" disabled={verifyingOtp}>
  {verifyingOtp ? <Loader2 className="size-4 animate-spin" /> : "Verify OTP"}
</Button>

                      </form>
                    </Form>
                  </TabsContent>

                </Tabs>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Don't have an account?
                </Button>
              </CardFooter>

            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
