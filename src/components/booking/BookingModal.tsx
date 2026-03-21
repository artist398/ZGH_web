"use client";

import { useId, useMemo, useState, type FormEvent } from "react";
import { useLocale } from "@/components/i18n/LanguageProvider";
import { SALON_CONTACT } from "@/lib/contact";

type BookingModalProps = {
  onClose: () => void;
};

export function BookingModal({ onClose }: BookingModalProps) {
  const { m } = useLocale();
  const b = m.booking;
  const formId = useId();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const serviceOptions = useMemo(
    () => m.services.items.map((item) => item.title),
    [m.services.items],
  );

  const showWhatsapp =
    typeof SALON_CONTACT.whatsappUrl === "string" &&
    SALON_CONTACT.whatsappUrl.length > 8;

  const buildBody = () => {
    const lines = [
      b.mailIntro,
      "",
      `${b.nameLabel}: ${name.trim() || "—"}`,
      `${b.phoneLabel}: ${phone.trim()}`,
      `${b.dateLabel}: ${date.trim() || "—"}`,
      `${b.timeLabel}: ${time.trim() || "—"}`,
      `${b.serviceLabel}: ${service.trim() || "—"}`,
      `${b.noteLabel}: ${note.trim() || "—"}`,
    ];
    return lines.join("\n");
  };

  const openWhatsapp = () => {
    const text = encodeURIComponent(buildBody());
    const base = SALON_CONTACT.whatsappUrl.replace(/\/$/, "");
    const sep = base.includes("?") ? "&" : "?";
    window.open(`${base}${sep}text=${text}`, "_blank", "noopener,noreferrer");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const p = phone.trim();
    if (p.length < 6) {
      setError(b.phoneInvalid);
      return;
    }
    const subject = b.mailSubject;
    const body = buildBody();
    const url = `mailto:${SALON_CONTACT.bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label={b.close}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        className="relative z-10 flex max-h-[min(92dvh,720px)] w-full max-w-lg flex-col rounded-t-2xl border border-white/10 bg-[#0a0608] shadow-2xl sm:max-h-[85dvh] sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <h2
              id={`${formId}-title`}
              className="salon-display text-xl font-medium text-white sm:text-2xl"
            >
              {b.title}
            </h2>
            <p className="salon-body mt-1.5 text-sm leading-relaxed text-white/50">
              {b.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 min-h-10 w-10 min-w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/20 hover:text-white"
          >
            <span className="sr-only">{b.close}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          className="salon-body flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
              {b.nameLabel}
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none ring-0 transition-colors placeholder:text-white/25 focus:border-[var(--salon-gold)]/45"
              placeholder={b.namePlaceholder}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
              {b.phoneLabel}
              <span className="text-[var(--salon-red-glow)]"> *</span>
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none focus:border-[var(--salon-gold)]/45"
              placeholder={b.phonePlaceholder}
            />
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
                {b.dateLabel}
              </span>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none focus:border-[var(--salon-gold)]/45"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
                {b.timeLabel}
              </span>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none focus:border-[var(--salon-gold)]/45"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
              {b.serviceLabel}
            </span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/10 bg-[#12080c] px-4 py-3 text-[15px] text-white outline-none focus:border-[var(--salon-gold)]/45"
            >
              <option value="">{b.servicePlaceholder}</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
              {b.noteLabel}
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none focus:border-[var(--salon-gold)]/45"
              placeholder={b.notePlaceholder}
            />
          </label>

          {error ? (
            <p className="text-sm text-[var(--salon-red-glow)]" role="alert">
              {error}
            </p>
          ) : null}

          <p className="text-xs leading-relaxed text-white/35">{b.footerNote}</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="submit"
              className="salon-btn-gold min-h-12 flex-1 touch-manipulation rounded-full px-6 py-3 text-sm font-semibold text-[#1a0508]"
            >
              {b.submitMail}
            </button>
            {showWhatsapp ? (
              <button
                type="button"
                onClick={() => {
                  const p = phone.trim();
                  if (p.length < 6) {
                    setError(b.phoneInvalid);
                    return;
                  }
                  setError("");
                  openWhatsapp();
                  onClose();
                }}
                className="min-h-12 flex-1 touch-manipulation rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--salon-gold)]/35"
              >
                {b.submitWhatsapp}
              </button>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-4 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={`tel:${SALON_CONTACT.phoneTel}`}
              className="inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-[var(--salon-gold)] transition-colors hover:bg-white/[0.04]"
            >
              {b.dial} {SALON_CONTACT.phoneDisplay}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
