"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import type { GalleryShot } from "@/lib/messages";
import {
  COSMETIC_PATHS,
  GALLERY_DOOR,
  HAIR_PATHS,
  INTERIOR_PATHS,
  MASSAGE_PATHS,
  SHAMPOO_PATHS,
} from "@/lib/galleryAssets";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { InteriorScroller } from "./InteriorScroller";

function categoryShots(label: string, count: number): GalleryShot[] {
  return Array.from({ length: count }, (_, i) => ({
    alt: `${label} ${i + 1}`,
    caption: `${label} · ${String(i + 1).padStart(2, "0")}`,
  }));
}

/** 与「空间美学」主标题同系：展示字体 + 大字阶 + 金线点缀 */
const gallerySectionTitleClass =
  "salon-display text-center text-[clamp(1.65rem,3.6vw,2.75rem)] font-medium leading-[1.1] tracking-[0.04em] text-neutral-900 sm:text-left";

function GallerySectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1">
      <h3 className={gallerySectionTitleClass}>{children}</h3>
      <div
        className="mx-auto mt-4 h-[2px] w-[min(5.5rem,40vw)] max-w-[11rem] rounded-full bg-gradient-to-r from-transparent via-[var(--salon-gold)]/55 to-transparent sm:mx-0"
        aria-hidden
      />
    </div>
  );
}

export function Gallery() {
  const { m } = useLocale();
  const shots = m.gallery.shots;
  const doorShot = shots[0];
  const interiorShots = shots.slice(1, 6);

  return (
    <section
      id="space"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] border-t border-neutral-200 bg-white py-24 max-sm:py-28 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-5 max-sm:px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="salon-kicker text-sm tracking-[0.5em] text-[var(--salon-gold)]">
            {m.gallery.kicker}
          </p>
          <h2 className="salon-display mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] text-neutral-900">
            {m.gallery.title}
          </h2>
          <p className="salon-body mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-neutral-600 sm:text-lg">
            {m.gallery.lead}
          </p>
        </Reveal>

        {doorShot ? (
          <Reveal delayMs={80} className="mt-12 sm:mt-16">
            <figure className="salon-gallery-card group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 sm:rounded-2xl">
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden sm:aspect-[21/9] sm:min-h-[240px]">
                <Image
                  src={GALLERY_DOOR}
                  alt={doorShot.alt}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] sm:group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, min(1400px, 90vw)"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--salon-gold)] sm:text-xs sm:tracking-[0.35em]">
                    {m.gallery.entranceTitle}
                  </span>
                  <p className="salon-body mt-1.5 text-base font-medium leading-snug text-neutral-900 sm:mt-2 sm:text-lg md:text-xl">
                    {doorShot.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ) : null}

        {interiorShots.length > 0 && INTERIOR_PATHS.length > 0 ? (
          <Reveal delayMs={100} className="mt-10 sm:mt-14">
            <GallerySectionTitle>{m.gallery.sectionInterior}</GallerySectionTitle>
            <InteriorScroller
              paths={INTERIOR_PATHS}
              shots={interiorShots}
              scrollHint={m.gallery.scrollHint}
            />
          </Reveal>
        ) : null}

        <Reveal delayMs={120} className="mt-14 sm:mt-16">
          <GallerySectionTitle>{m.gallery.sectionHair}</GallerySectionTitle>
          <InteriorScroller
            paths={HAIR_PATHS}
            shots={categoryShots(m.gallery.sectionHair, HAIR_PATHS.length)}
            scrollHint={m.gallery.scrollHint}
          />
        </Reveal>

        <Reveal delayMs={140} className="mt-14 sm:mt-16">
          <GallerySectionTitle>{m.gallery.sectionShampoo}</GallerySectionTitle>
          <InteriorScroller
            paths={SHAMPOO_PATHS}
            shots={categoryShots(m.gallery.sectionShampoo, SHAMPOO_PATHS.length)}
            scrollHint={m.gallery.scrollHint}
          />
        </Reveal>

        <Reveal delayMs={160} className="mt-14 sm:mt-16">
          <GallerySectionTitle>{m.gallery.sectionMassage}</GallerySectionTitle>
          <InteriorScroller
            paths={MASSAGE_PATHS}
            shots={categoryShots(m.gallery.sectionMassage, MASSAGE_PATHS.length)}
            scrollHint={m.gallery.scrollHint}
          />
        </Reveal>

        <Reveal delayMs={180} className="mt-14 sm:mt-16">
          <GallerySectionTitle>{m.gallery.sectionCosmetic}</GallerySectionTitle>
          <InteriorScroller
            paths={COSMETIC_PATHS}
            shots={categoryShots(
              m.gallery.sectionCosmetic,
              COSMETIC_PATHS.length,
            )}
            scrollHint={m.gallery.scrollHint}
          />
        </Reveal>
      </div>
    </section>
  );
}
