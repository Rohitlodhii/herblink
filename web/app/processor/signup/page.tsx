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
import { ProcessorAuthService } from "@/services/processor/auth.processor"
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
  processorId: z.string().min(1, "Processor ID is required"),
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
      processorId: "",
    },
  })

  const handleSignup = async (values: z.infer<typeof SignupSchema>) => {
    try {
      setLoading(true)
      const res = await ProcessorAuthService.signupProcessor({
        email: values.email,
        password: values.password,
        name: values.name || undefined,
        address: values.address || undefined,
        organization: values.organization || undefined,
        processorId: values.processorId,
      })
      
      if (res?.token) {
        Auth.setToken(res.token)
        toast.success(res?.msg || "Account created successfully!")
        router.push("/processor/dashboard")
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
    <div className="flex flex-col w-full mx-auto max-w-6xl border-l border-r border-border bg-background min-h-screen">
      <Accessbility />
      <div className="h-screen w-full flex flex-col gap-6">
        {/* Header */}
        <div className="border-b border-primary/30 h-12 flex items-center px-2 justify-between bg-background">
          <div className="h-full flex items-center justify-center">
            <Button 
              onClick={() => router.back()} 
              variant="secondary" 
              size="sm"
            >
              <ChevronLeft className="size-4" />
              <span className="md:flex hidden">Go Back</span>
            </Button>
          </div>
          <div className="md:text-lg text-sm font-semibold text-foreground">Processor Sign Up</div>
          <div></div>
        </div>

        {/* Content */}
        <div className="h-full flex md:items-center justify-center w-full bg-background overflow-y-auto py-4">
          <div className="mx-auto max-w-md w-full">
            <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Create Processor Account</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your details to create a new processor account
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
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              {...field}
                              className="focus:border-blue-500"
                            />
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
                            <Input 
                              type="password" 
                              placeholder="Enter your password" 
                              {...field}
                              className="focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="processorId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Processor ID <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your processor ID" 
                              {...field}
                              className="focus:border-blue-500"
                            />
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
                            <Input 
                              placeholder="Enter your name (optional)" 
                              {...field}
                              className="focus:border-blue-500"
                            />
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
                            <Input 
                              placeholder="Enter organization name (optional)" 
                              {...field}
                              className="focus:border-blue-500"
                            />
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
                            <Input 
                              placeholder="Enter your address (optional)" 
                              {...field}
                              className="focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" />
                          Creating account...
                        </>
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                  variant="default"
                  onClick={() => router.push("/processor/login")}
                >
                  Already have an account? Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

