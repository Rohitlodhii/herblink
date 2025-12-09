"use client";

import Navbar from '@/components/shared/Navbar'
import LabRegisterForm from '@/components/lab/labregister'
import Footer from '@/components/shared/Footer'

export default function Lab() {
  return <div className='flex flex-col'>
    <Navbar/>
    <div className='p-4 w-full flex items-center justify-center'>
      <LabRegisterForm/>
    </div>
    <Footer/>
  </div>
}

