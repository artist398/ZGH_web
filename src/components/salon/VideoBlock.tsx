"use client";

import { useLocale } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

export function VideoBlock() {
  const { m } = useLocale();

  return (
    <section
      id="film"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] overflow-hidden bg-[#050203] py-20 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(196,30,58,0.14),transparent_55%)]" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="salon-kicker text-sm tracking-[0.45em] text-[var(--salon-gold)]">
              {m.film.kicker}
            </p>
            <h2 className="salon-display mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-tight text-white">
              {m.film.title}
            </h2>
            <p className="salon-body mt-5 text-base leading-[1.9] text-white/50 sm:text-lg">
              {m.film.lead}
            </p>
          </Reveal>
        </div>

        <Reveal delayMs={120} className="mt-10 sm:mt-14">
          <div className="salon-video-frame group relative overflow-hidden rounded-xl border border-white/[0.08] bg-black shadow-[0_0_0_1px_rgba(212,175,55,0.08)_inset,0_40px_100px_-40px_rgba(0,0,0,0.9)] ring-1 ring-[var(--salon-gold)]/20 transition-shadow duration-700 sm:rounded-2xl sm:hover:shadow-[0_0_0_1px_rgba(212,175,55,0.15)_inset,0_50px_120px_-50px_rgba(196,30,58,0.35)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-[var(--salon-gold)]/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/zgh_door.jpg"
            >
              <source src="/IMG_5960.MP4" type="video/mp4" />
              {m.film.videoFallback}
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
