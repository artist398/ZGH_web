"use client";

import { useLocale } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

/** 大屏 12 列栅格：首卡双行主视觉 + 2×侧栏 + 3×第三行 + 3×第四行（共 9 项） */
const SERVICE_CELL_LG: readonly string[] = [
  "min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] lg:col-span-7 lg:row-span-2 lg:row-start-1 lg:col-start-1",
  "lg:col-span-5 lg:row-start-1 lg:col-start-8",
  "lg:col-span-5 lg:row-start-2 lg:col-start-8",
  "lg:col-span-4 lg:row-start-3 lg:col-start-1",
  "lg:col-span-4 lg:row-start-3 lg:col-start-5",
  "lg:col-span-4 lg:row-start-3 lg:col-start-9",
  "min-h-[188px] sm:min-h-[208px] lg:min-h-[228px] lg:col-span-4 lg:row-start-4 lg:col-start-1",
  "min-h-[188px] sm:min-h-[208px] lg:min-h-[228px] lg:col-span-4 lg:row-start-4 lg:col-start-5",
  "min-h-[188px] sm:min-h-[208px] lg:min-h-[228px] lg:col-span-4 lg:row-start-4 lg:col-start-9",
];

export function Services() {
  const { m } = useLocale();
  const items = m.services.items;

  return (
    <section
      id="services"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] border-t border-neutral-200 bg-neutral-50 py-24 max-sm:py-28 sm:py-28 lg:py-36"
    >
      <div className="salon-section-glow pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--salon-red-glow)]/[0.06] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem] px-5 max-sm:px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="salon-kicker text-sm tracking-[0.5em] text-[var(--salon-gold)] max-sm:tracking-[0.42em]">
            {m.services.kicker}
          </p>
          <h2 className="salon-display mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] text-neutral-900">
            {m.services.title}
          </h2>
          <p className="salon-body mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-neutral-600 sm:text-lg">
            {m.services.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-[4.5rem] sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-6">
          {items.map((item, index) => {
            const isHero = index === 0;
            const cell = SERVICE_CELL_LG[index] ?? "lg:col-span-4";

            return (
              <Reveal key={item.title} delayMs={index * 65} className={cell}>
                <article
                  className={`salon-service-card group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-white via-white to-neutral-50/90 p-6 shadow-[0_10px_36px_rgba(0,0,0,0.045)] transition-all duration-500 sm:p-7 md:p-8 ${
                    isHero
                      ? "ring-1 ring-[var(--salon-gold)]/20 sm:ring-[var(--salon-gold)]/25"
                      : ""
                  }`}
                >
                  <div
                    className="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--salon-gold)]/90 via-[var(--salon-gold)]/40 to-[var(--salon-gold)]/10"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--salon-red-glow)]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:h-48 sm:w-48"
                    aria-hidden
                  />
                  <div className="relative flex min-h-0 flex-1 flex-col pl-5 sm:pl-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex max-w-[min(100%,14rem)] items-center rounded-full border border-[var(--salon-gold)]/28 bg-[var(--salon-gold)]/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--salon-gold)] sm:max-w-[calc(100%-3rem)] sm:text-[11px]">
                        {m.services.businessTag}
                      </span>
                      <span
                        className="salon-mono shrink-0 text-3xl font-light tabular-nums leading-none text-neutral-200 transition-colors duration-500 group-hover:text-[var(--salon-gold)]/40 sm:text-4xl"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className={`mt-5 text-pretty font-semibold tracking-tight text-neutral-900 ${
                        isHero
                          ? "text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.2] sm:text-3xl"
                          : "text-lg leading-snug sm:text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`salon-body mt-3.5 text-pretty text-neutral-600 sm:mt-4 ${
                        isHero
                          ? "text-[15px] leading-[1.82] sm:text-base sm:leading-[1.85]"
                          : "text-sm leading-[1.78] sm:text-[15px] sm:leading-[1.82]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
