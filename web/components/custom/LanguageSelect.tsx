"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी (Hindi)" },
  { value: "mr", label: "मराठी (Marathi)" },
  { value: "ta", label: "தமிழ் (Tamil)" },
  { value: "te", label: "తెలుగు (Telugu)" },
  { value: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { value: "bn", label: "বাংলা (Bengali)" },
  { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { value: "gu", label: "ગુજરાતી (Gujarati)" },
];

type LanguageSelectProps = {
  variant?: "compact" | "navbar";
};

const LanguageSelect = ({ variant = "compact" }: LanguageSelectProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? localStorage.getItem("i18nextLng")
        : null;
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", lang);
    }
  };

  const availableLangs = Object.keys(i18n.options?.resources || {});
  const options =
    availableLangs.length > 0
      ? LANG_OPTIONS.filter((opt) => availableLangs.includes(opt.value))
      : LANG_OPTIONS;

  const baseClass =
    variant === "navbar"
      ? "h-9 rounded-md border border-input bg-background px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
      : "border rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors";

  const selectId = `language-selector-${variant}`;

  return (
    <div className="flex flex-col gap-1 text-xs">
      <label className="sr-only" htmlFor={selectId}>
        Language selector
      </label>
      <select
        id={selectId}
        value={(i18n.language || "en").split("-")[0]}
        onChange={(e) => changeLanguage(e.target.value)}
        className={baseClass}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;

