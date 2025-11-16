"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/public/locales/en/common.json"

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: en },
        
      },
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
