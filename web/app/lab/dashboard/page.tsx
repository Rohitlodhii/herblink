"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Accessbility from "@/components/core/Navbar/Access";
import { Auth } from "@/lib/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, ClipboardList, Users, FlaskConical, Loader2 } from "lucide-react";
import { toast } from "sonner";
import LabInfoManagement from "./components/LabInfoManagement";
import LabWorkersManagement from "./components/LabWorkersManagement";
import LabProcessorInputs from "./components/LabProcessorInputs";

export default function LabDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    const token = Auth.getToken();
    if (!token) {
      router.replace("/lab/login");
      return;
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    Auth.clearToken();
    toast.success("Logged out");
    router.push("/lab/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-medium">
        <Loader2 className="size-6 animate-spin mr-2" />
        Loading Lab Dashboard...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full h-screen border-l border-r border-b border-primary/40 overflow-hidden bg-background">
      <Accessbility />
      <div className="flex flex-col w-full h-full">
        <div className="h-14 border-b border-primary/30 flex items-center px-4 justify-between bg-background">
          <div className="flex items-center gap-2">
            <FlaskConical className="size-5 text-primary" />
            <h1 className="text-lg font-semibold text-foreground">Lab Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex border border-primary/30 rounded-md overflow-hidden">
              <Button
                variant={activeTab === "info" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setActiveTab("info")}
              >
                Lab Info
              </Button>
              <Button
                variant={activeTab === "workers" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setActiveTab("workers")}
              >
                Workers
              </Button>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="size-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="border-b border-primary/30 px-4">
              <TabsList className="bg-transparent">
               
                <TabsTrigger value="processor-inputs" className="data-[state=active]:bg-secondary">
                  <FlaskConical className="size-4 mr-2" />
                  Processor Inputs
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto thin-scrollbar p-4">
              <TabsContent value="info" className="mt-0 h-full">
                <LabInfoManagement />
              </TabsContent>
              <TabsContent value="workers" className="mt-0 h-full">
                <LabWorkersManagement />
              </TabsContent>
              <TabsContent value="processor-inputs" className="mt-0 h-full">
                <LabProcessorInputs />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

