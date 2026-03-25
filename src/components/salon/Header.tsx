"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { GALLERY_LOGO } from "@/lib/galleryAssets";

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
    <header className="salon-header fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 pt-[env(safe-area-inset-top,0px)] shadow-sm backdrop-blur-xl max-sm:border-neutral-200/55 max-sm:bg-white/[0.72] max-sm:shadow-[0_14px_44px_-18px_rgba(0,0,0,0.09)] max-sm:backdrop-blur-2xl">
      <div className="salon-header-line pointer-events-none absolute inset-x-0 bottom-0 h-px" />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6 lg:px-12">
        <Link
          href="#top"
          onClick={closeMobileMenu}
          className="group flex min-w-0 flex-1 items-center gap-2.5 touch-manipulation transition-opacity active:opacity-90 sm:max-w-none sm:flex-none sm:gap-3 sm:hover:opacity-90"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-md ring-1 ring-[var(--salon-gold)]/40 sm:h-11 sm:w-11 md:h-12 md:w-12 max-sm:ring-2 max-sm:ring-white/70 max-sm:shadow-[0_8px_28px_-12px_rgba(0,0,0,0.12)]">
            <Image
              src={GALLERY_LOGO}
              alt={m.logoAlt}
              fill
              className="object-cover transition-transform duration-500 sm:group-hover:scale-105"
              sizes="48px"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[14px] font-medium tracking-[0.06em] text-neutral-900 sm:text-[14px] sm:tracking-[0.08em] md:text-[15px]">
              {m.brandName}
            </span>
            <span className="mt-0.5 block max-w-[46vw] truncate text-[8px] uppercase tracking-[0.32em] text-[var(--salon-gold)] sm:max-w-none sm:text-[10px] sm:tracking-[0.42em] max-sm:text-[9px] max-sm:tracking-[0.36em]">
              {m.brandTag}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-10 text-[13px] tracking-[0.12em] text-neutral-600 xl:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="salon-nav-link relative py-1 text-neutral-700 transition-colors hover:text-[var(--salon-gold)]"
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
            className="salon-btn-gold hidden touch-manipulation rounded-full px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-md sm:inline-flex"
          >
            {m.nav.book}
          </button>

          <details className="salon-mobile-nav relative xl:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span className="flex h-11 min-h-11 w-11 min-w-11 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-neutral-200/90 bg-gradient-to-b from-white to-neutral-50/95 text-neutral-800 shadow-[0_4px_18px_-10px_rgba(0,0,0,0.12)] transition-colors active:border-[var(--salon-gold)]/45 max-sm:border-white/90 max-sm:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.14)] sm:hover:border-[var(--salon-gold)]/40">
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
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-1.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px)))] rounded-2xl border border-neutral-200/90 bg-white/95 p-3 shadow-2xl backdrop-blur-xl sm:mt-3 sm:p-4 max-sm:ring-1 max-sm:ring-black/[0.04]">
              <nav className="flex flex-col gap-0.5 text-sm" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="touch-manipulation rounded-xl px-3 py-3 text-neutral-800 transition-colors active:bg-neutral-100 hover:bg-neutral-50 hover:text-[var(--salon-gold)]"
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
                  className="salon-btn-gold mt-2 w-full touch-manipulation rounded-xl px-3 py-3.5 text-center text-sm font-semibold text-white"
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
