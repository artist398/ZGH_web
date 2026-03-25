"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { GALLERY_FRONT } from "@/lib/galleryAssets";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  const { m } = useLocale();
  const { openBooking } = useBooking();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden pt-[calc(4.25rem+env(safe-area-inset-top,0px))]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="salon-kenburns absolute inset-0 scale-105 sm:scale-110">
          <Image
            src={GALLERY_FRONT}
            alt={m.hero.imgAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/48 via-white/22 to-white/95 max-sm:from-white/42 max-sm:via-white/18 max-sm:to-white/[0.97] sm:from-white/88 sm:via-white/45 sm:to-white"
          aria-hidden
        />
        <div
          className="salon-hero-vignette pointer-events-none absolute inset-0 max-sm:opacity-70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] salon-noise"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-[22%] z-[1] h-px w-14 bg-gradient-to-r from-[var(--salon-gold)]/90 to-transparent sm:left-8 lg:hidden" />
      <div className="pointer-events-none absolute right-4 top-[38%] z-[1] h-px w-12 bg-gradient-to-l from-[var(--salon-gold)]/55 to-transparent sm:right-8 lg:hidden" />
      <div className="pointer-events-none absolute left-0 top-1/3 hidden h-px w-24 bg-gradient-to-r from-[var(--salon-gold)] to-transparent lg:block" />
      <div className="pointer-events-none absolute right-0 top-2/3 hidden h-px w-32 bg-gradient-to-l from-[var(--salon-gold)]/60 to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4.25rem-env(safe-area-inset-top,0px))] max-w-[90rem] flex-col justify-end gap-8 px-5 pb-[max(5rem,env(safe-area-inset-bottom,0px)+1.25rem)] pt-8 max-sm:gap-10 max-sm:px-6 max-sm:pb-[max(4.5rem,env(safe-area-inset-bottom,0px)+1rem)] max-sm:pt-6 sm:gap-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-32">
        <div className="salon-hero-frame salon-hero-mobile-panel relative mx-auto w-full max-w-4xl px-0 py-1 text-center sm:px-4 sm:py-6">
          <div className="salon-hero-frame-corner salon-hero-frame-tl" />
          <div className="salon-hero-frame-corner salon-hero-frame-tr" />
          <div className="salon-hero-frame-corner salon-hero-frame-bl" />
          <div className="salon-hero-frame-corner salon-hero-frame-br" />

          <Reveal>
            <p className="salon-kicker text-[11px] tracking-[0.32em] text-[var(--salon-gold)] max-sm:text-xs max-sm:tracking-[0.38em] sm:text-sm sm:tracking-[0.55em] md:text-base">
              {m.hero.kicker}
            </p>
          </Reveal>

          <Reveal delayMs={80} className="mt-5 sm:mt-8">
            <h1 className="min-w-0">
              <span className="salon-hero-brand salon-hero-title-sparkle inline-block whitespace-nowrap text-[clamp(1.65rem,7.8vw,4.85rem)] leading-[1.1] sm:text-[clamp(2rem,7vw,5.25rem)] sm:leading-[1.12]">
                中国红·美丽汇
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={160} className="mt-6 sm:mt-10">
            <p className="salon-hero-lead mx-auto max-w-2xl text-[15px] leading-[1.92] tracking-[0.02em] text-neutral-800 max-sm:text-base max-sm:leading-[2] sm:text-lg sm:leading-[1.9] sm:tracking-normal">
              {m.hero.lead}
            </p>
          </Reveal>

          <Reveal
            delayMs={240}
            className="mt-7 flex w-full flex-col items-center gap-3.5 sm:mt-10 sm:gap-3"
          >
            <div className="flex w-full max-w-xl flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="#services"
                className="salon-btn-gold salon-cta-pulse inline-flex min-h-[3.25rem] w-full touch-manipulation items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold tracking-[0.14em] text-white shadow-2xl shadow-red-900/25 transition-transform active:scale-[0.98] max-sm:shadow-xl sm:w-auto sm:min-h-0 sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.2em] sm:hover:scale-[1.02]"
              >
                {m.hero.ctaPrimary}
              </Link>
              <Link
                href="#film"
                className="inline-flex min-h-[3.25rem] w-full touch-manipulation items-center justify-center gap-3 rounded-full border border-neutral-300/85 bg-gradient-to-b from-white/95 to-neutral-50/90 px-8 py-4 text-[15px] font-medium tracking-wide text-neutral-900 shadow-md backdrop-blur-md transition-all active:bg-white max-sm:border-white/90 max-sm:shadow-[0_10px_36px_-14px_rgba(0,0,0,0.12)] max-sm:ring-1 max-sm:ring-white/70 sm:w-auto sm:min-h-0 sm:px-10 sm:py-4 sm:text-sm sm:shadow-sm sm:hover:border-[var(--salon-gold)]/45 sm:hover:bg-white"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--salon-gold)]/15 text-[var(--salon-gold)] ring-1 ring-[var(--salon-gold)]/25">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {m.hero.ctaFilm}
              </Link>
            </div>
            <button
              type="button"
              onClick={openBooking}
              className="text-[15px] font-medium tracking-wide text-[var(--salon-gold)] underline-offset-[6px] transition-colors touch-manipulation hover:underline sm:text-sm"
            >
              {m.nav.book}
            </button>
          </Reveal>
        </div>

        <Reveal
          delayMs={300}
          className="grid grid-cols-1 gap-4 border-t border-neutral-200/90 pt-8 max-sm:grid-cols-2 max-sm:gap-3.5 max-sm:border-neutral-200/60 max-sm:pt-8 sm:flex sm:flex-row sm:flex-wrap sm:gap-10 sm:pt-10 md:gap-16"
        >
          <div className="min-w-0 max-sm:rounded-[1.25rem] max-sm:border max-sm:border-white/60 max-sm:bg-gradient-to-b max-sm:from-white/78 max-sm:to-white/42 max-sm:p-4 max-sm:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.14)] max-sm:backdrop-blur-xl max-sm:ring-1 max-sm:ring-white/55">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:tracking-[0.45em] max-sm:text-[9px] max-sm:tracking-[0.32em] max-sm:text-[var(--salon-gold)]/88">
              {m.hero.statSpaceLabel}
            </span>
            <span className="salon-body mt-2 block max-w-md text-sm leading-relaxed text-neutral-800 sm:max-w-xs sm:text-base max-sm:text-[13px] max-sm:leading-relaxed max-sm:tracking-wide">
              {m.hero.statSpace}
            </span>
          </div>
          <div className="min-w-0 max-sm:rounded-[1.25rem] max-sm:border max-sm:border-white/60 max-sm:bg-gradient-to-b max-sm:from-white/78 max-sm:to-white/42 max-sm:p-4 max-sm:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.14)] max-sm:backdrop-blur-xl max-sm:ring-1 max-sm:ring-white/55">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:tracking-[0.45em] max-sm:text-[9px] max-sm:tracking-[0.32em] max-sm:text-[var(--salon-gold)]/88">
              {m.hero.statExpLabel}
            </span>
            <span className="salon-body mt-2 block max-w-md text-sm leading-relaxed text-neutral-800 sm:max-w-xs sm:text-base max-sm:text-[13px] max-sm:leading-relaxed max-sm:tracking-wide">
              {m.hero.statExp}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
