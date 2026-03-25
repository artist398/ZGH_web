"use client";

import { useLocale } from "@/components/i18n/LanguageProvider";
import { GALLERY_DOOR, PROMO_VIDEO_MP4 } from "@/lib/galleryAssets";
import { Reveal } from "@/components/motion/Reveal";

export function VideoBlock() {
  const { m } = useLocale();

  return (
    <section
      id="film"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] overflow-hidden border-t border-neutral-200 bg-white py-24 max-sm:py-28 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(185,28,28,0.08),transparent_55%)]" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.05),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem] px-5 max-sm:px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="salon-kicker text-sm tracking-[0.45em] text-[var(--salon-gold)]">
            {m.film.kicker}
          </p>
          <h2 className="salon-display mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-tight text-neutral-900">
            {m.film.title}
          </h2>
          <p className="salon-body mx-auto mt-5 max-w-2xl text-base leading-[1.9] text-neutral-600 sm:text-lg">
            {m.film.lead}
          </p>
        </Reveal>

        <Reveal delayMs={120} className="mt-10 sm:mt-14">
          <div className="salon-video-frame group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm ring-1 ring-[var(--salon-gold)]/15 transition-shadow duration-700 sm:rounded-2xl sm:hover:shadow-md">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-[var(--salon-gold)]/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={GALLERY_DOOR}
            >
              <source src={PROMO_VIDEO_MP4} type="video/mp4" />
              {m.film.videoFallback}
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
