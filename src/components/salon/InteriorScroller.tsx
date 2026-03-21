"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryShot } from "@/lib/messages";

type InteriorScrollerProps = {
  paths: readonly string[];
  shots: GalleryShot[];
  scrollHint: string;
};

export function InteriorScroller({
  paths,
  shots,
  scrollHint,
}: InteriorScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector("[data-slide]");
    if (!slide) return;
    const slideW = (slide as HTMLElement).offsetWidth;
    const gap = 16;
    const idx = Math.round(el.scrollLeft / (slideW + gap));
    setActive(Math.max(0, Math.min(idx, paths.length - 1)));
  }, [paths.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      window.requestAnimationFrame(updateActive);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => el.removeEventListener("scroll", onScroll);
  }, [updateActive]);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll("[data-slide]")[index] as
      | HTMLElement
      | undefined;
    if (!slide) return;
    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="relative mt-8 sm:mt-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#030102] to-transparent sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#030102] to-transparent sm:w-12" />

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={scrollHint}
        className="salon-hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-4 [-webkit-overflow-scrolling:touch] sm:gap-5 sm:pl-6 lg:pl-8"
      >
        {paths.map((src, index) => {
          const shot = shots[index];
          if (!shot) return null;
          return (
            <figure
              key={src}
              data-slide
              className="group relative w-[min(100%,18.5rem)] shrink-0 snap-center overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] sm:w-[min(100%,24rem)] sm:rounded-2xl md:w-[min(100%,28rem)] lg:w-[min(100%,32rem)]"
            >
              <div className="relative aspect-[3/4] w-full min-h-[280px] sm:aspect-[4/5] sm:min-h-[320px] md:min-h-[360px]">
                <Image
                  src={src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.02] sm:group-hover:scale-[1.035]"
                  sizes="(max-width:640px) 85vw, (max-width:1024px) 384px, 512px"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#030102]/95 via-[#030102]/2 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--salon-gold-muted)] sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="salon-body mt-1 text-base font-medium leading-snug text-white sm:text-lg">
                    {shot.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          );
        })}
        <div className="w-2 shrink-0 sm:w-4" aria-hidden />
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:justify-center sm:gap-6">
        <div className="flex justify-center gap-2" role="tablist" aria-label={scrollHint}>
          {paths.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                active === i
                  ? "w-8 bg-[var(--salon-gold)]"
                  : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-[11px] tracking-wide text-white/40 sm:text-xs">
          {scrollHint}
        </p>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 md:pointer-events-auto md:block">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          className="pointer-events-auto flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-[#030102]/80 text-white shadow-lg backdrop-blur-md transition-colors hover:border-[var(--salon-gold)]/40 hover:text-[var(--salon-gold)] disabled:opacity-30"
          disabled={active <= 0}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 6l-6 6 6 6" />
          </svg>
        </button>
      </div>
      <div className="pointer-events-none absolute top-1/2 right-2 z-20 hidden -translate-y-1/2 md:pointer-events-auto md:block">
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollTo(Math.min(paths.length - 1, active + 1))}
          className="pointer-events-auto flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-[#030102]/80 text-white shadow-lg backdrop-blur-md transition-colors hover:border-[var(--salon-gold)]/40 hover:text-[var(--salon-gold)] disabled:opacity-30"
          disabled={active >= paths.length - 1}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
