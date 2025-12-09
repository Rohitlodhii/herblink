"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
    const router = useRouter();
    const { t } = useTranslation();
  return (
    <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 ">
      <div className="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 className="flex-grow sm:pr-16 text-2xl  font-semibold title-font text-gray-900">
          {t("howItWorks.title")}
        </h1>
        <button
        onClick={()=>router.push('/working')}
          className="flex-shrink-0 backdrop-blur-md bg-indigo-600 text-white 
                 px-8 py-3 rounded-xl text-lg font-medium shadow-md 
                 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 
                 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 mt-10 sm:mt-0">
          {t("howItWorks.button")}
        </button>
      </div>
    </div>
  </section>
  
  )
}

export default HowItWorks
