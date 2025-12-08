"use client"

import DrawerProvider from "@/components/helper/DrawerProvider"
import "@/i18n/index"
import { FarmerDrawer, SidebarProps } from "./sidebar"
import { Menu } from "lucide-react"
import PersonalInfoForm from "./addPersonalInfo"
import { useFarmerDashboard } from "@/store/farmerStore"
import FarmerHomePage from "./homepage"

import LandInfoSection from "./addLandInfo"

const FarmerDashboardMain = ({ user }: SidebarProps) => {

  const activeSection = useFarmerDashboard((s) => s.activeSection);
  return (
    <div className="w-full h-full ">
       <div className="h-12 border-b border-primary/30 flex items-center px-4 justify-end">
       <DrawerProvider trigger={
                <span  className='cursor-pointer py-2 rounded-md text-primary px-3 text-xs '>
                    <Menu/>
                </span>
            } Content={FarmerDrawer} />
             
       </div>
       <div className="h-full w-full p-4 overflow-y-scroll thin-scrollbar pt-20 ">
       {activeSection === "home" && <FarmerHomePage />}
       {activeSection === "personal" && <PersonalInfoForm />}
       {activeSection === "land" && <LandInfoSection />}

      
       </div>
    </div>
  )
}

export default FarmerDashboardMain
