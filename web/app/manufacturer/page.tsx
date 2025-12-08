"use client"

import Accessbility from "@/components/core/Navbar/Access"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { ManufacturerAuthService } from "@/services/manufacturer/auth.manufacturer"
import { useTranslation } from "react-i18next"
import "@/i18n/index"
import { Auth } from "@/lib/auth"

// Zod validation schema
const SignupSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().optional(),
  address: z.string().optional(),
  organization: z.string().optional(),
  manufacturerId: z.string().min(1, "Manufacturer ID is required"),
})

export default function Page() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      address: "",
      organization: "",
      manufacturerId: "",
    },
  })

  const handleSignup = async (values: z.infer<typeof SignupSchema>) => {
    try {
      setLoading(true)
      const res = await ManufacturerAuthService.signupManufacturer({
        email: values.email,
        password: values.password,
        name: values.name || undefined,
        address: values.address || undefined,
        organization: values.organization || undefined,
        manufacturerId: values.manufacturerId,
      })
      
      if (res?.token) {
        Auth.setToken(res.token)
        toast.success(res.msg || "Manufacturer account created successfully!")
        // Redirect to dashboard or appropriate page
        router.push("/manufacturer/dashboard")
      }
    } catch (err: any) {
      console.error(err)
      const msg = err?.message || err?.response?.data?.msg || "Failed to create account. Please try again."
      toast.error(msg)
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
              <span className="md:flex hidden">Go Back</span>
            </Button>
          </div>
          <div className="md:text-lg text-sm font-semibold">Manufacturer</div>
          <div></div>
        </div>

        {/* Content */}
        <div className="h-full flex md:items-center justify-center w-full">
          <div className="mx-auto max-w-md w-full">
            <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-lg">
              <CardHeader>
                <CardTitle>Create Manufacturer Account</CardTitle>
                <CardDescription>
                  Enter your details to create a new manufacturer account
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
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
                          <FormLabel>Password <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="manufacturerId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manufacturer ID <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter unique manufacturer ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter organization name (optional)" {...field} />
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
                            <Input placeholder="Enter your address (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" />
                          Creating Account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="ghost"
                  onClick={() => router.push("/manufacturer/login")}
                >
                  Already have an account? Sign in
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

