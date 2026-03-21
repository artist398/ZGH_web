"use client";

import { useEffect, useLayoutEffect } from "react";
import { htmlLang, type Locale } from "@/lib/messages";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function LangHtml({ locale }: { locale: Locale }) {
  useIsoLayoutEffect(() => {
    document.documentElement.lang = htmlLang[locale];
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  return null;
}
