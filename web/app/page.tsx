"use client";

import { useTranslation } from "react-i18next";
import "@/i18n/index"
import Navbar from "@/components/core/Navbar/Navbar";

export default function Home() {

  const { t } = useTranslation("common");

  return (
      <div className="max-w-6xl mx-auto w-full border border-border">    
          <Navbar/>
      </div>
  );
}
