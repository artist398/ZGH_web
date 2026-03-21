"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { InteriorScroller } from "./InteriorScroller";

const paths = [
  "/zgh_door.jpg",
  "/zgh_neijing01.jpeg",
  "/zgh_neijing02.jpeg",
  "/zgh_neijing03.jpeg",
] as const;

export function Gallery() {
  const { m } = useLocale();
  const shots = m.gallery.shots;
  const door = paths[0];
  const doorShot = shots[0];
  const interiorPaths = paths.slice(1);
  const interiorShots = shots.slice(1);

  return (
    <section
      id="space"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] border-t border-white/[0.05] bg-[#030102] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="salon-kicker text-sm tracking-[0.5em] text-[var(--salon-gold)]">
            {m.gallery.kicker}
          </p>
          <h2 className="salon-display mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] text-white">
            {m.gallery.title}
          </h2>
          <p className="salon-body mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-white/50 sm:text-lg">
            {m.gallery.lead}
          </p>
        </Reveal>

        {doorShot ? (
          <Reveal delayMs={80} className="mt-12 sm:mt-16">
            <figure className="salon-gallery-card group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] sm:rounded-2xl">
              <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden sm:aspect-[21/9] sm:min-h-[240px]">
                <Image
                  src={door}
                  alt={doorShot.alt}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] sm:group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, min(1400px, 90vw)"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#030102]/92 via-[#030102]/2 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--salon-gold-muted)] sm:text-xs sm:tracking-[0.35em]">
                    {m.gallery.entranceTitle}
                  </span>
                  <p className="salon-body mt-1.5 text-base font-medium leading-snug text-white sm:mt-2 sm:text-lg md:text-xl">
                    {doorShot.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ) : null}

        {interiorPaths.length > 0 && interiorShots.length > 0 ? (
          <Reveal delayMs={140} className="mt-10 sm:mt-14">
            <InteriorScroller
              paths={interiorPaths}
              shots={interiorShots}
              scrollHint={m.gallery.scrollHint}
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
