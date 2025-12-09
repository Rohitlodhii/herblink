"use client";

import Accessbility from "@/components/core/Navbar/Access";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { LabAuthService } from "@/services/lab/auth.lab";
import "@/i18n/index";
import { Auth } from "@/lib/auth";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof LoginSchema>) => {
    try {
      setLoading(true);
      const res = await LabAuthService.loginLab({
        email: values.email,
        password: values.password,
      });

      if (res?.token) {
        Auth.setToken(res.token);
        toast.success(res?.msg || "Login successful");
        router.push("/lab/dashboard");
      }
    } catch (err: any) {
      const msg = err?.message || err?.response?.data?.msg || "Failed to login. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto max-w-6xl border-l border-r border-border bg-background min-h-screen">
      <Accessbility />
      <div className="h-screen w-full flex flex-col gap-6">
        <div className="border-b border-primary/30 h-12 flex items-center px-2 justify-between bg-background">
          <div className="h-full flex items-center justify-center">
            <Button onClick={() => router.back()} variant="secondary" size="sm">
              <ChevronLeft className="size-4" />
              <span className="md:flex hidden">Go Back</span>
            </Button>
          </div>
          <div className="md:text-lg text-sm font-semibold">Lab Login</div>
          <div></div>
        </div>

        <div className="h-full flex md:items-center justify-center w-full bg-background">
          <div className="mx-auto max-w-md w-full">
            <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-lg bg-background">
              <CardHeader>
                <CardTitle>Login to Lab Account</CardTitle>
                <CardDescription>Enter your credentials to access your lab dashboard</CardDescription>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" />
                          Logging in...
                        </>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  variant="default"
                  onClick={() => router.push("/lab")}
                >
                  Don't have an account? Sign up
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

