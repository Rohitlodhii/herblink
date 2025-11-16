import React from 'react'
import { useTranslation } from 'react-i18next'
import { OrganisationPopover } from './PrimaryNav'

const MobileNav = () => {
    const {t} = useTranslation("common")
  return (
    <div className='flex flex-col'>
       <div className='h-12 w-full border-b border-primary/30 pt-2 text-center font-semibold'>{t("primary.mobile")}</div>
       <div className='flex flex-col gap-4 bg-primary-foreground'>
      
       <div className=' flex flex-col py-2 pb-8 gap-2 items-center text-sm '>
        <div className='border-b border-primary/30 w-full py-2 flex items-center justify-center '>
            <OrganisationPopover  />
        </div>
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2  cursor-pointer  border-b border-primary/30 w-full py-2'>{t("primary.sc")}</span>
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2  cursor-pointer border-b border-primary/30 w-full py-2'>{t("primary.Scp")}</span>
            <span className='flex gap-1 items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 p-2  cursor-pointer border-b border-primary/30 w-full py-2'>{t("primary.cpt")}</span>
        </div>

        <div className='text-center pb-2'>
            <h1 className='text-xl font-medium'>Herblink</h1>
            <span className='text-sm'>Ministry of Ayush</span>
        </div>

            </div>
          
       </div>

  )
}

export default MobileNav
