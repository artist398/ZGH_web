"use client";

import { useLocale } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  const { m } = useLocale();
  const items = m.services.items;

  return (
    <section
      id="services"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] border-t border-white/[0.05] bg-[#030102] py-20 sm:py-28 lg:py-36"
    >
      <div className="salon-section-glow pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--salon-red-glow)]/[0.06] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="salon-kicker text-sm tracking-[0.5em] text-[var(--salon-gold)]">
            {m.services.kicker}
          </p>
          <h2 className="salon-display mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] text-white">
            {m.services.title}
          </h2>
          <p className="salon-body mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-white/50 sm:text-lg">
            {m.services.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-20 sm:gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {items.map((item, index) => {
            const isHero = index === 0;

            const cellPositions = [
              "min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] lg:col-span-7 lg:row-span-2 lg:row-start-1 lg:col-start-1",
              "lg:col-span-5 lg:row-start-1 lg:col-start-8",
              "lg:col-span-5 lg:row-start-2 lg:col-start-8",
              "lg:col-span-4 lg:row-start-3 lg:col-start-1",
              "lg:col-span-4 lg:row-start-3 lg:col-start-5",
              "lg:col-span-4 lg:row-start-3 lg:col-start-9",
              "min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] lg:col-span-12 lg:row-start-4 lg:col-start-1",
            ];

            const cell = cellPositions[index] ?? "lg:col-span-4";

            return (
              <Reveal
                key={item.title}
                delayMs={index * 70}
                className={cell}
              >
                <div className="salon-bento-card group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] via-transparent to-[var(--salon-red-glow)]/[0.04] p-5 transition-all duration-500 active:border-[var(--salon-gold)]/25 sm:rounded-2xl sm:p-7 md:p-8 sm:hover:border-[var(--salon-gold)]/30 sm:hover:shadow-[0_0_60px_-20px_rgba(212,175,55,0.25)]">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--salon-gold)]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="salon-mono text-4xl font-light tabular-nums text-white/[0.12] transition-colors duration-500 group-hover:text-[var(--salon-gold)]/40 sm:text-5xl"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-px flex-1 translate-y-3 bg-gradient-to-r from-white/10 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="relative mt-6">
                    <h3
                      className={`font-medium tracking-wide text-white ${isHero ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
                    >
                      {item.title}
                    </h3>
                    <p className="salon-body mt-3 text-sm leading-[1.85] text-white/45 sm:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
