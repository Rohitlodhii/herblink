"use client";

import Navbar from '@/components/shared/Navbar'
import Heropage from '@/components/shared/Heropage'
import FAQ from '@/components/shared/faq'
import Footer from '@/components/shared/Footer'
import HowItWorks from '@/components/shared/HowItWorks'

export default function Home() {
  return <div>
    <Navbar/>
    <Heropage/>
    
    <FAQ/>
    <Footer/>
  </div>
}
