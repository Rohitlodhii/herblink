import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Beaker, ChevronDown, Factory, Pickaxe, Tractor } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'




export const NoAccountOrganisationPopover = ( ) => {

    const { t } = useTranslation("common")
    return ( 
        <Popover>
            <PopoverTrigger className='flex gap-1 items-center justify-center border border-primary/30 bg-sidebar p-2 py-1 cursor-pointer rounded-md'>
                <span>{t('noacc.title')}</span>
                <span><ChevronDown className='size-4'/></span>
            </PopoverTrigger>
            <PopoverContent className='w-[250px] p-1 space-y-1'>
                <div className=' cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className=' p-1 rounded-sm'>
                        <Tractor className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("noacc.farm")}
                    </span>
                </div>
                <div className='cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className=' p-1 rounded-sm'>
                        <Pickaxe className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("noacc.process")}
                    </span>
                </div>
                <div className=' cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className=' p-1 rounded-sm'>
                        <Beaker className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("noacc.lab")}
                    </span>
                </div>
                <div className=' cursor-pointer hover:bg-secondary rounded-md h-8 w-full flex items-center p-1 gap-2'>
                    <div className=' p-1 rounded-sm'>
                        <Factory className='size-4'/>
                    </div>
                    <span className='text-sm'>
                        {t("noacc.factory")}
                    </span>
                </div>
            </PopoverContent>
        </Popover>  
    )
}

const LoginDialog = () => {
    const {t} = useTranslation("common")
    const router = useRouter();
  return (
    <div className='flex flex-col'>
        <div className='h-12 bg-blue-200 dark:bg-blue-800 border-b border-primary/50 flex w-full items-center px-4'>
            <span className='text-lg font-semibold'>{t("login.title")}</span>
        </div>
        <div className='h-96 flex '>
            <div className='flex-1 flex flex-col p-4 gap-6'>
            <h1 className='text-lg font-medium'>Choose your organisation type</h1>
            <ul className='flex flex-col gap-2'>
                <li onClick={()=>router.push('/farmer/login')} className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Farmer Account
                    <Image className='absolute top-0 right-0' src={'/farm.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Processor Account
                    <Image className='absolute top-0 right-0' src={'/processor.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Lab Account
                    <Image className='absolute top-0 right-0' src={'/lab.png'} alt='FarmImage' height={40} width={200}/>
                </li>
                <li className='relative bg-secondary px-2 py-2 rounded-sm border border-primary/30 overflow-hidden hover:outline hover:outline-blue-500 cursor-pointer '>Factory Account
                    <Image className='absolute top-0 right-0' src={'/factory.png'} alt='FarmImage' height={40} width={200}/>
                </li>
            </ul>

            <div>
                <NoAccountOrganisationPopover/>
            </div>
            </div>
            <div className='w-[50%]  relative'>
            <Image className='absolute -bottom-28  -right-28' src={'/loginwheel.png'} alt='FarmImage' height={140} width={400}/>
            <Image className='absolute -top-28 -right-28 -z-10 opacity-80' src={'/loginwheel.png'} alt='FarmImage' height={100} width={300}/>
            </div>
        </div>
    </div>
  )
}

export default LoginDialog
