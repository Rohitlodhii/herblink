import DialogProvider from '@/components/helper/DialogProvider'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Beaker, ChevronDown, Factory, Hamburger, HamburgerIcon, Menu, Pickaxe, Tractor } from 'lucide-react'
import { useTranslation, UseTranslation } from 'next-i18next'
import Image from 'next/image'
import LoginDialog from '../login/LoginDialog'
import DrawerProvider from '@/components/helper/DrawerProvider'
import DrawerPrimaryNav from './DrawerPrimaryNav'
import MobileNav from './MobileNav'




export const OrganisationPopover = ( ) => {

    const { t } = useTranslation("common")
    return ( 
        <Popover>
            <PopoverTrigger className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2 py-1 cursor-pointer rounded-md '>
                <span>{t("primary.org")}</span>
                <span><ChevronDown className='size-4'/></span>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-1 space-y-1'>
                <div className='border border-border cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className='border border-border p-1 rounded-sm'>
                        <Tractor className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("primary.org1")}
                    </span>
                </div>
                <div className='border border-border cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className='border border-border p-1 rounded-sm'>
                        <Pickaxe className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("primary.org2")}
                    </span>
                </div>
                <div className='border border-border cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className='border border-border p-1 rounded-sm'>
                        <Beaker className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("primary.org3")}
                    </span>
                </div>
                <div className='border border-border cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className='border border-border p-1 rounded-sm'>
                        <Factory className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("primary.org4")}
                    </span>
                </div>
            </PopoverContent>
        </Popover>  
    )
}

const PrimaryNav = () => {

    const { t } = useTranslation("common")
  return (
    <div className='h-12 w-full  border-b border-border flex items-center justify-between px-2'>
        <div className='flex gap-2 items-center justify-center'>
            <Image src={'/ayush.png'} alt='logo' width={35} height={40} />
            <Image src={'/emblem.png'} alt='logo' width={20} height={20} className='dark:invert' />
        </div>

        {/* Large screen view */}

        <div className='hidden md:flex gap-2 items-center text-sm '>
            <OrganisationPopover  />
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2 py-1 cursor-pointer rounded-md'>{t("primary.sc")}</span>
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2 py-1 cursor-pointer rounded-md'>{t("primary.Scp")}</span>
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2 py-1 cursor-pointer rounded-md'>{t("primary.cpt")}</span>
        </div>
        <div className='hidden md:flex'>
            <DialogProvider trigger={
                <span  className='bg-blue-500 hover:bg-blue-600 cursor-pointer py-1.5 rounded-md text-primary-foreground px-3'>{t("login.trigger")}</span>
            } Content={LoginDialog} />
        </div>


        {/* small Screen View */}
        <div className='md:hidden flex gap-2 items-center justify-center'>
      
        <DrawerProvider trigger={
                <span  className='bg-blue-500 hover:bg-blue-600 cursor-pointer py-2 rounded-md text-primary-foreground px-3 text-xs '>{t("login.trigger")}</span>
            } Content={DrawerPrimaryNav} />
              <DrawerProvider trigger={
                <span  className=' cursor-pointer py-1.5 rounded-md text-primary px-3 text-xs '><Menu/></span>
            } Content={MobileNav} />
            </div>

    </div>
  )
}

export default PrimaryNav
