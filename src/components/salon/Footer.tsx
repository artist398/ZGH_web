"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { SALON_CONTACT } from "@/lib/contact";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  const { m } = useLocale();
  const { openBooking } = useBooking();

  return (
    <footer
      id="visit"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px)+0.75rem)] border-t border-white/[0.08] bg-[#020101] pt-16 pb-[max(4rem,env(safe-area-inset-bottom,0px)+1.5rem)] sm:pt-24 sm:pb-28"
    >
      <div className="salon-footer-aurora pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-50" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
            <div className="max-w-lg space-y-6">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--salon-gold)]/40 shadow-[0_0_32px_rgba(212,175,55,0.12)]">
                  <Image
                    src="/zgh_logo.jpeg"
                    alt={m.logoAlt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </span>
                <div>
                  <p className="text-xl font-medium tracking-[0.12em] text-white">
                    {m.brandName}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-[var(--salon-gold-muted)]">
                    {m.brandTag}
                  </p>
                </div>
              </div>
              <p className="salon-body text-sm leading-[1.9] text-white/42 sm:text-[15px]">
                {m.footer.blurb}
              </p>
              <button
                type="button"
                onClick={openBooking}
                className="salon-btn-gold mt-2 inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold text-[#1a0508]"
              >
                {m.footer.bookCta}
              </button>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:gap-24">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--salon-gold)]">
                  {m.footer.quickLinks}
                </h3>
                <ul className="salon-body mt-5 space-y-1 text-sm text-white/50 sm:space-y-3">
                  <li>
                    <Link
                      href="#services"
                      className="block touch-manipulation rounded-lg py-2.5 transition-colors active:text-[var(--salon-gold)] sm:inline sm:py-0 sm:hover:text-[var(--salon-gold)]"
                    >
                      {m.nav.services}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#film"
                      className="block touch-manipulation rounded-lg py-2.5 transition-colors active:text-[var(--salon-gold)] sm:inline sm:py-0 sm:hover:text-[var(--salon-gold)]"
                    >
                      {m.nav.film}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#space"
                      className="block touch-manipulation rounded-lg py-2.5 transition-colors active:text-[var(--salon-gold)] sm:inline sm:py-0 sm:hover:text-[var(--salon-gold)]"
                    >
                      {m.nav.space}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--salon-gold)]">
                  {m.footer.visitTips}
                </h3>
                <ul className="salon-body mt-5 space-y-2.5 text-sm leading-relaxed text-white/50 sm:space-y-3">
                  <li className="pl-0.5">{m.footer.tip1}</li>
                  <li className="pl-0.5">{m.footer.tip2}</li>
                  <li className="pl-0.5">{m.footer.tip3}</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-white/[0.08] pt-10 sm:mt-20 sm:pt-12">
          <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--salon-gold)] sm:text-left">
            {m.footer.contactTitle}
          </h3>
          <div className="mt-6 flex flex-col gap-8 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-16 sm:gap-y-8 lg:gap-x-24">
            <div className="text-center sm:max-w-xs sm:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {m.footer.phoneLabel}
              </p>
              <a
                href={`tel:${SALON_CONTACT.phoneTel}`}
                className="salon-body mt-2 inline-flex min-h-11 touch-manipulation items-center justify-center text-lg font-medium tracking-wide text-white transition-colors hover:text-[var(--salon-gold)] sm:min-h-0 sm:justify-start sm:text-xl"
              >
                {SALON_CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="min-w-0 flex-1 text-center sm:min-w-[min(100%,20rem)] sm:text-left lg:max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {m.footer.addressLabel}
              </p>
              <p className="salon-body mt-2 whitespace-pre-line text-[15px] leading-[1.85] text-white/75 sm:text-base">
                {m.footer.address}
              </p>
              {SALON_CONTACT.mapsUrl ? (
                <a
                  href={SALON_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="salon-body mt-4 inline-flex min-h-10 touch-manipulation items-center text-sm font-medium text-[var(--salon-gold)] underline-offset-4 transition-colors hover:underline"
                >
                  {m.footer.openMaps}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-8 text-center text-xs text-white/32 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-10 sm:text-left">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {m.footer.copyright}
          </p>
          <Link
            href="#top"
            className="inline-flex min-h-11 touch-manipulation items-center justify-center rounded-lg px-2 transition-colors active:text-[var(--salon-gold)] sm:min-h-0 sm:hover:text-[var(--salon-gold)]"
          >
            {m.footer.backToTop}
          </Link>
        </div>
      </div>
    </footer>
  );
}
