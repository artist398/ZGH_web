"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLocale } from "@/components/i18n/LanguageProvider";

function closeMobileMenu() {
  document.querySelectorAll("details.salon-mobile-nav").forEach((el) => {
    (el as HTMLDetailsElement).open = false;
  });
}

export function Header() {
  const { m } = useLocale();
  const { openBooking } = useBooking();
  const nav = [
    { href: "#services", label: m.nav.services },
    { href: "#film", label: m.nav.film },
    { href: "#space", label: m.nav.space },
    { href: "#visit", label: m.nav.visit },
  ];

  return (
    <header className="salon-header fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030102]/80 backdrop-blur-2xl pt-[env(safe-area-inset-top,0px)]">
      <div className="salon-header-line pointer-events-none absolute inset-x-0 bottom-0 h-px" />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-12">
        <Link
          href="#top"
          onClick={closeMobileMenu}
          className="group flex min-w-0 flex-1 items-center gap-2.5 touch-manipulation transition-opacity active:opacity-90 sm:max-w-none sm:flex-none sm:gap-3 sm:hover:opacity-90"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--salon-gold)]/45 shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:h-11 sm:w-11 md:h-12 md:w-12">
            <Image
              src="/zgh_logo.jpeg"
              alt={m.logoAlt}
              fill
              className="object-cover transition-transform duration-500 sm:group-hover:scale-105"
              sizes="48px"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[13px] font-medium tracking-[0.06em] text-white sm:text-[14px] sm:tracking-[0.08em] md:text-[15px]">
              {m.brandName}
            </span>
            <span className="mt-0.5 block max-w-[46vw] truncate text-[8px] uppercase tracking-[0.32em] text-[var(--salon-gold-muted)] sm:max-w-none sm:text-[10px] sm:tracking-[0.42em]">
              {m.brandTag}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-10 text-[13px] tracking-[0.12em] text-white/65 xl:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="salon-nav-link relative py-1 text-white/75 transition-colors hover:text-[var(--salon-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={openBooking}
            className="salon-btn-gold hidden touch-manipulation rounded-full px-5 py-2 text-xs font-semibold tracking-wide text-[#1a0508] shadow-lg shadow-[#c9a227]/20 sm:inline-flex"
          >
            {m.nav.book}
          </button>

          <details className="salon-mobile-nav relative xl:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span className="flex h-11 min-h-11 w-11 min-w-11 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors active:border-[var(--salon-gold)]/35 sm:hover:border-[var(--salon-gold)]/35">
                <span className="sr-only">{m.navOpen}</span>
                <svg
                  aria-hidden
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-1.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px)))] rounded-2xl border border-white/10 bg-[#0a0508]/96 p-3 shadow-2xl backdrop-blur-2xl sm:mt-3 sm:p-4">
              <nav className="flex flex-col gap-0.5 text-sm" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="touch-manipulation rounded-xl px-3 py-3 text-white/85 transition-colors active:bg-white/[0.06] hover:bg-white/[0.04] hover:text-[var(--salon-gold)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    openBooking();
                  }}
                  className="salon-btn-gold mt-2 w-full touch-manipulation rounded-xl px-3 py-3.5 text-center text-sm font-semibold text-[#1a0508]"
                >
                  {m.nav.book}
                </button>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
