"use client";

import type { ReactNode } from "react";
import { BookingProvider } from "@/components/booking/BookingContext";
import { LanguageProvider, useLocale } from "./LanguageProvider";
import { LangHtml } from "./LangHtml";

function LangSync() {
  const { locale } = useLocale();
  return <LangHtml locale={locale} />;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LangSync />
      <BookingProvider>{children}</BookingProvider>
    </LanguageProvider>
  );
}
