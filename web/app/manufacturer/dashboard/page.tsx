"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Accessbility from "@/components/core/Navbar/Access";
import { Auth } from "@/lib/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Package, Layers, Sprout, LogOut, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ProductsManagement from "./components/ProductsManagement";
import ProductInventoryManagement from "./components/ProductInventoryManagement";
import HerbInventoryManagement from "./components/HerbInventoryManagement";

export default function ManufacturerDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    const token = Auth.getToken();
    if (!token) {
      router.replace("/manufacturer/login");
      return;
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    Auth.clearToken();
    toast.success("Logged out");
    router.push("/manufacturer/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-medium">
        <Loader2 className="size-6 animate-spin mr-2" />
        Loading Manufacturer Dashboard...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full h-screen border-l border-r border-b border-primary/40 overflow-hidden bg-background">
      <Accessbility />
      <div className="flex flex-col w-full h-full">
        <div className="h-14 border-b border-primary/30 flex items-center px-4 justify-between bg-background">
          <div className="flex items-center gap-2">
            <Package className="size-5 text-primary" />
            <h1 className="text-lg font-semibold text-foreground">Manufacturer Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="border-b border-primary/30 px-4">
              <TabsList className="bg-transparent">
                <TabsTrigger value="products" className="data-[state=active]:bg-secondary">
                  <Package className="size-4 mr-2" />
                  Products
                </TabsTrigger>
                <TabsTrigger value="product-inventory" className="data-[state=active]:bg-secondary">
                  <Layers className="size-4 mr-2" />
                  Product Inventory
                </TabsTrigger>
                <TabsTrigger value="herb-inventory" className="data-[state=active]:bg-secondary">
                  <Sprout className="size-4 mr-2" />
                  Herb Inventory
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto thin-scrollbar p-4">
              <TabsContent value="products" className="mt-0 h-full">
                <ProductsManagement />
              </TabsContent>
              <TabsContent value="product-inventory" className="mt-0 h-full">
                <ProductInventoryManagement />
              </TabsContent>
              <TabsContent value="herb-inventory" className="mt-0 h-full">
                <HerbInventoryManagement />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

