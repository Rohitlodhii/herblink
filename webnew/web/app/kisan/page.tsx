"use client";

import { useTranslation } from "react-i18next";
import Navbar from '@/components/shared/Navbar'
import KisanLandingPage from '@/components/kisan/landing'
import Footer from '@/components/shared/Footer'

export default function Kisan() {
  const { t } = useTranslation();
  return <div>
    <Navbar/>
      <div className='bg-primary/80 h-12 w-full flex items-center justify-center text-2xl'>
      {t("entities.kisan.portal")}
    </div>
    <KisanLandingPage/>
    <Footer/>
  </div>
}

