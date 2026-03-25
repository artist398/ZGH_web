"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { GalleryShot } from "@/lib/messages";

type InteriorScrollerProps = {
  paths: readonly string[];
  shots: GalleryShot[];
  scrollHint: string;
};

function scrollSlideIntoCenter(
  el: HTMLElement,
  slide: HTMLElement,
  behavior: ScrollBehavior,
) {
  const left = slide.offsetLeft + slide.offsetWidth / 2 - el.clientWidth / 2;
  const max = el.scrollWidth - el.clientWidth;
  el.scrollTo({ left: Math.max(0, Math.min(left, max)), behavior });
}

function getClosestSlideIndex(el: HTMLElement): number {
  const slides = el.querySelectorAll("[data-slide]");
  if (slides.length === 0) return 0;
  const center = el.scrollLeft + el.clientWidth / 2;
  let best = 0;
  let bestDist = Infinity;
  slides.forEach((s, i) => {
    const node = s as HTMLElement;
    const c = node.offsetLeft + node.offsetWidth / 2;
    const d = Math.abs(c - center);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });
  return best;
}

export function InteriorScroller({
  paths,
  shots,
  scrollHint,
}: InteriorScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = paths.length;
  const pathsKey = paths.join("|");
  const valid =
    n > 0 && paths.every((_, i) => Boolean(shots[i]));

  const syncActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || n < 1) return;
    const idx = getClosestSlideIndex(el);
    setActive(Math.max(0, Math.min(idx, n - 1)));
  }, [n]);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || n < 1 || !valid) return;
    const slidesEls = el.querySelectorAll("[data-slide]");
    if (slidesEls.length === 0) return;
    scrollSlideIntoCenter(el, slidesEls[0] as HTMLElement, "auto");
    setActive(0);
  }, [n, pathsKey, valid]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      window.requestAnimationFrame(syncActiveFromScroll);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    syncActiveFromScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [syncActiveFromScroll]);

  const scrollBehavior = (): ScrollBehavior => {
    if (typeof window === "undefined") return "smooth";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
  };

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el || n < 1) return;
    const slidesEls = el.querySelectorAll("[data-slide]");
    const target = slidesEls[index] as HTMLElement | undefined;
    if (!target) return;
    scrollSlideIntoCenter(el, target, scrollBehavior());
  };

  const goPrev = () => {
    if (active <= 0) return;
    scrollToIndex(active - 1);
  };

  const goNext = () => {
    if (active >= n - 1) return;
    scrollToIndex(active + 1);
  };

  if (!valid) return null;

  return (
    <div className="relative mt-6 sm:mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12" />

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={scrollHint}
        className="salon-hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 pl-4 [-webkit-overflow-scrolling:touch] max-sm:gap-3.5 sm:gap-6 sm:pl-6 lg:pl-8"
      >
        {paths.map((src, index) => {
          const shot = shots[index];
          if (!shot) return null;
          return (
            <figure
              key={`${src}-${index}`}
              data-slide
              className="group relative w-[min(100%,18.5rem)] shrink-0 snap-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm sm:w-[min(100%,19.5rem)] sm:rounded-2xl md:w-[min(100%,21.5rem)] lg:w-[min(100%,24rem)]"
            >
              <div className="relative aspect-[3/4] w-full min-h-[244px] sm:aspect-[4/5] sm:min-h-[268px] md:min-h-[288px] lg:min-h-[308px]">
                <Image
                  src={src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.02] sm:group-hover:scale-[1.035]"
                  sizes="(max-width:640px) 92vw, (max-width:1024px) 320px, 400px"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/5 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/98 via-white/85 to-transparent px-3 pt-6 pb-3 sm:px-4 sm:pb-4 sm:pt-8">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-[var(--salon-gold)] sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="salon-body mt-0.5 text-sm font-medium leading-snug text-neutral-900 sm:text-[15px]">
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
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                active === i
                  ? "w-8 bg-[var(--salon-gold)]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-[11px] tracking-wide text-neutral-500 sm:text-xs">
          {scrollHint}
        </p>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 md:pointer-events-auto md:block">
        <button
          type="button"
          aria-label="Previous"
          onClick={goPrev}
          disabled={active <= 0}
          className="pointer-events-auto flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-md transition-colors hover:border-[var(--salon-gold)]/40 hover:text-[var(--salon-gold)] disabled:cursor-not-allowed disabled:opacity-30"
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
          onClick={goNext}
          disabled={active >= n - 1}
          className="pointer-events-auto flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-md transition-colors hover:border-[var(--salon-gold)]/40 hover:text-[var(--salon-gold)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
