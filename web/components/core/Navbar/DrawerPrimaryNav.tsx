import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NoAccountOrganisationPopover } from '../login/LoginDialog'
import { useRouter } from 'next/navigation'

const DrawerPrimaryNav = () => {
    const {t} = useTranslation("common")
    const router = useRouter();
  return (
    <div className='flex flex-col'>
       <div className='h-12 w-full border-b border-primary/30 pt-2 text-center font-semibold'>{t("login.title")}</div>
       <div className='flex flex-col gap-4 bg-primary-foreground'>
       <div className='flex-1 flex flex-col p-4 gap-6'>
            <h1 className='text-lg text-center font-medium'>Choose your organisation type</h1>
            <ul className='flex flex-col gap-2'>
                <li onClick={()=>router.push('/farmer/login')} className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Farmer Account
                    <Image className='absolute top-0 right-0' src={'/farm.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li onClick={()=>router.push('/processor/login')} className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Processor Account
                    <Image className='absolute top-0 right-0' src={'/processor.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Lab Account
                    <Image className='absolute top-0 right-0' src={'/lab.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Factory Account
                    <Image className='absolute top-0 right-0' src={'/factory.png'} alt='FarmImage' height={40} width={200}/>
                </li>
            </ul>
            </div>
            <div className='pb-4 flex items-center justify-center'>
                <NoAccountOrganisationPopover/>
            </div>
       </div>
    </div>
  )
}

export default DrawerPrimaryNav
