"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import hi from "./hi.json";
import mr from "./marathi.json";
import ta from "./tamil.json";
import te from "./telugu.json";
import kn from "./kannada.json";
import bn from "./bengali.json";
import pa from "./punjabi.json";
import gu from "./gujarati.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: en },
        hi: { common: hi },
        mr: { common: mr },
        ta: { common: ta },
        te: { common: te },
        kn: { common: kn },
        bn: { common: bn },
        pa: { common: pa },
        gu: { common: gu },
      },
      ns: ["common"],
      defaultNS: "common",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
    });
}

export default i18n;
