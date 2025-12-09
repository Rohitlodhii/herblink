"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@/lib/auth";
import Accessbility from "@/components/core/Navbar/Access";
import "@/i18n/index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Package, Users, Building2, LogOut, Loader2 } from "lucide-react";
import { toast } from "sonner";
import InventoryManagement from "./components/InventoryManagement";
import FarmerInputsManagement from "./components/FarmerInputsManagement";
import PlantInfoManagement from "./components/PlantInfoManagement";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("inventory");

  useEffect(() => {
    const token = Auth.getToken();

    if (!token) {
      router.replace("/processor/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    Auth.clearToken();
    router.push("/processor/login");
    toast.success("Logged out successfully");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-medium">
        <Loader2 className="size-6 animate-spin mr-2" />
        Loading Processor Dashboard...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full h-screen border-l border-r border-b border-primary/40 overflow-hidden bg-background">
      <Accessbility />
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="h-14 border-b border-primary/30 flex items-center px-4 justify-between bg-background">
          <div className="flex items-center gap-2">
            <Package className="size-5 text-primary" />
            <h1 className="text-lg font-semibold text-foreground">Processor Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="border-b border-primary/30 px-4">
              <TabsList className="bg-transparent">
                <TabsTrigger value="inventory" className="data-[state=active]:bg-secondary">
                  <Package className="size-4 mr-2" />
                  Inventory
                </TabsTrigger>
                <TabsTrigger value="farmer-inputs" className="data-[state=active]:bg-secondary">
                  <Users className="size-4 mr-2" />
                  Farmer Inputs
                </TabsTrigger>
                <TabsTrigger value="plant-info" className="data-[state=active]:bg-secondary">
                  <Building2 className="size-4 mr-2" />
                  Plant Info
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto thin-scrollbar p-4">
              <TabsContent value="inventory" className="mt-0 h-full">
                <InventoryManagement />
              </TabsContent>

              <TabsContent value="farmer-inputs" className="mt-0 h-full">
                <FarmerInputsManagement />
              </TabsContent>

              <TabsContent value="plant-info" className="mt-0 h-full">
                <PlantInfoManagement />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

