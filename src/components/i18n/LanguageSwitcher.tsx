"use client";

import { localeLabels, localeLabelsCompact, locales } from "@/lib/messages";
import { useLocale } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex max-w-[min(100%,11.5rem)] shrink-0 items-center rounded-full border border-white/10 bg-black/30 p-0.5 shadow-inner shadow-black/40 backdrop-blur-md sm:max-w-none"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`min-h-9 min-w-9 touch-manipulation rounded-full px-2 py-1.5 text-[10px] font-medium transition-all duration-300 sm:min-h-0 sm:min-w-0 sm:px-3 sm:py-1.5 sm:text-xs ${
              active
                ? "salon-lang-active text-[#1a0508] shadow-md"
                : "text-white/55 active:text-white hover:text-white/90"
            }`}
          >
            <span className="sm:hidden">{localeLabelsCompact[code]}</span>
            <span className="hidden sm:inline">{localeLabels[code]}</span>
          </button>
        );
      })}
    </div>
  );
}
