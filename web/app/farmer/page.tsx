"use client"

import Accessbility from '@/components/core/Navbar/Access'
import "@/i18n/index"

const page = () => {
  return (
    <div className='w-full mx-auto max-w-5xl border-l border-r border-primary/40 h-screen flex flex-col'>
        <Accessbility/>
      
    </div>
  )
}

export default page
