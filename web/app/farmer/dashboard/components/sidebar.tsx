import { FarmerAuthUser } from '@/services/farmer/farmer'
import { useFarmerDashboard } from '@/store/farmerStore';
import { ChevronRight } from 'lucide-react';

export type SidebarProps = {
    user: FarmerAuthUser | undefined;
  };
  
  const FarmerSidebar = ({ user }: SidebarProps) => {
    const setActiveSection = useFarmerDashboard((s) => s.setActiveSection);
  return (
    <div className='md:w-1/3 hidden md:block h-full border-r border-primary/30'>
        <div className='h-12 flex gap-1 border-b border-primary/30 overflow-hidden'>
            <div className='h-full aspect-square bg-orange-400 border-r border-primary/30'>

            </div>
            <div className='flex-col w-full items-center -space-y-1'>
            <div className='text-xl font-semibold '>{user?.fullName}</div>
            <div>
                {user?.isVerified ? "(verified)" : ("not verified")}
            </div>
            </div>
            
        </div>
        <div className='w-full pt-10 flex flex-col gap-2'>
            <h1 className='font-semibold px-4 '>License</h1>

            <div className='flex flex-col'>
            <div onClick={() => setActiveSection("personal")}  className='h-10 hover:bg-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4 border-t border-b border-primary/30'>
                <span>Personal Information</span>
                <span>
                    <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
                </span>
            </div>
            <div onClick={() => setActiveSection("land")}  className='h-10 hover:bg-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4  border-b border-primary/30'>
                <span>Land Information</span>
                <span>
                    <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
                </span>
            </div>
            <div className='h-10 bg-primary text-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4  border-b border-primary/30'>
                <span>Apply For license</span>
                <span>
                    <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
                </span>
            </div>
            </div>

        </div>
    </div>
  )
}


export const FarmerDrawer =  () => {


    return (
        <div className='w-full pt-10 flex flex-col gap-2'>
        <h1 className='font-semibold px-4 '>Profile</h1>

        <div className='flex flex-col'>
        <div className='h-10 hover:bg-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4 border-t border-b border-primary/30'>
            <span>Personal Information</span>
            <span>
                <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
            </span>
        </div>
        <div className='h-10 hover:bg-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4  border-b border-primary/30'>
            <span>Land Information</span>
            <span>
                <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
            </span>
        </div>
        <div className='h-10 bg-primary text-secondary cursor-pointer transition ease-in group flex justify-between items-center w-full px-4  border-b border-primary/30'>
                <span>Apply For license</span>
                <span>
                    <ChevronRight className='group-hover:translate-x-2 transition ease-in h-5 w-5'/>
                </span>
            </div>
        </div>

    </div>
    )
}
export default FarmerSidebar
