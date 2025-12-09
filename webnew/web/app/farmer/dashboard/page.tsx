"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@/lib/auth";
import { FarmerService } from "@/services/farmer/index.farmer";
import Accessbility from "@/components/core/Navbar/Access";
import "@/i18n/index"
import FarmerSidebar from "./components/sidebar";
import FarmerDashboardMain from "./components/main";
import { FarmerAuthUser } from "@/services/farmer/farmer";

export default function Page() {
  const router = useRouter();
  const [farmerData, setFarmerData] = useState<FarmerAuthUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Auth.getToken();

    console.log(token)

    // If no token → redirect
    if (!token) {
      console.log("no tken")
      router.replace("/farmer/login");
      return;
    }

    async function loadData() {
      try {
        const farmer = await FarmerService.getFarmerData();
        setFarmerData(farmer);
      } catch (err: any) {
        if (err.response?.status === 401) {
          Auth.clearToken();
          router.replace("/farmer/login");
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-medium">
        Loading Farmer Dashboard...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full h-screen border-l border-r border-b border-primary/40 overflow-hidden">
       <Accessbility/>
      <div className="flex w-full h-full">
          <FarmerSidebar user={farmerData[0]}/>
          <FarmerDashboardMain user={farmerData[0]}/>
      </div>
    </div>
  );
}
