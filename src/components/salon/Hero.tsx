"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";
import { useLocale } from "@/components/i18n/LanguageProvider";
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
        <div className="salon-kenburns absolute inset-0 scale-110">
          <Image
            src="/zgh_front.jpg"
            alt={m.hero.imgAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#030102]/50 via-[#120408]/82 to-[#030102]"
          aria-hidden
        />
        <div
          className="salon-hero-vignette pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] salon-noise"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-1/3 hidden h-px w-24 bg-gradient-to-r from-[var(--salon-gold)] to-transparent lg:block" />
      <div className="pointer-events-none absolute right-0 top-2/3 hidden h-px w-32 bg-gradient-to-l from-[var(--salon-gold)]/60 to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4.25rem-env(safe-area-inset-top,0px))] max-w-[90rem] flex-col justify-end gap-8 px-4 pb-[max(5rem,env(safe-area-inset-bottom,0px)+1.25rem)] pt-10 sm:gap-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-32">
        <div className="salon-hero-frame relative max-w-4xl px-0 py-1 sm:px-4 sm:py-6">
          <div className="salon-hero-frame-corner salon-hero-frame-tl" />
          <div className="salon-hero-frame-corner salon-hero-frame-tr" />
          <div className="salon-hero-frame-corner salon-hero-frame-bl" />
          <div className="salon-hero-frame-corner salon-hero-frame-br" />

          <Reveal>
            <p className="salon-kicker text-xs tracking-[0.28em] text-[var(--salon-gold)] sm:text-sm sm:tracking-[0.55em] md:text-base">
              {m.hero.kicker}
            </p>
          </Reveal>

          <Reveal delayMs={80} className="mt-6 sm:mt-8">
            <h1 className="space-y-1 sm:space-y-3">
              <span className="salon-display-cn salon-title-shine block text-[clamp(2.75rem,14vw,7.5rem)] leading-[0.95] text-white">
                中国红
              </span>
              <span className="salon-display-cn block bg-gradient-to-r from-[#fff8e7] via-[var(--salon-gold)] to-[#8b6914] bg-clip-text text-[clamp(2.25rem,10vw,5.5rem)] leading-none text-transparent">
                美丽汇
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={160} className="mt-8 max-w-xl sm:mt-10">
            <p className="salon-body text-[15px] leading-[1.82] text-white/72 sm:text-lg sm:leading-[1.85]">
              {m.hero.lead}
            </p>
          </Reveal>

          <Reveal
            delayMs={240}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#services"
                className="salon-btn-gold salon-cta-pulse inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#1a0508] shadow-2xl shadow-[#c9a227]/30 transition-transform active:scale-[0.98] sm:w-auto sm:min-h-0 sm:px-10 sm:py-4 sm:tracking-[0.2em] sm:hover:scale-[1.02]"
              >
                {m.hero.ctaPrimary}
              </Link>
              <Link
                href="#film"
                className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-all active:bg-white/[0.08] sm:w-auto sm:min-h-0 sm:px-10 sm:py-4 sm:hover:border-[var(--salon-gold)]/45 sm:hover:bg-white/[0.07]"
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
              className="self-center text-sm font-medium tracking-wide text-[var(--salon-gold)] underline-offset-[6px] transition-colors touch-manipulation hover:underline sm:self-start"
            >
              {m.nav.book}
            </button>
          </Reveal>
        </div>

        <Reveal
          delayMs={300}
          className="flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:flex-wrap sm:gap-10 sm:pt-10 md:gap-16"
        >
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-white/30 sm:tracking-[0.45em]">
              {m.hero.statSpaceLabel}
            </span>
            <span className="salon-body mt-2 block max-w-md text-sm leading-relaxed text-white/78 sm:max-w-xs sm:text-base">
              {m.hero.statSpace}
            </span>
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-white/30 sm:tracking-[0.45em]">
              {m.hero.statExpLabel}
            </span>
            <span className="salon-body mt-2 block max-w-md text-sm leading-relaxed text-white/78 sm:max-w-xs sm:text-base">
              {m.hero.statExp}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
