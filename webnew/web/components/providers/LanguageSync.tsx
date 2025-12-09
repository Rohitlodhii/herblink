"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Component to sync HTML lang attribute with i18n language
 * This ensures proper language attribute for accessibility and SEO
 */
export function LanguageSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return null; // This component doesn't render anything
}

