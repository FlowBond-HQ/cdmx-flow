"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Locale = "es" | "en";

const copy: Record<
  Locale,
  {
    back: string;
    title: string;
    lead: string;
    name: string;
    email: string;
    phone: string;
    instagram: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  }
> = {
  es: {
    back: "← Volver a FLOW CDMX",
    title: "Aplicar como artista",
    lead: "Cuéntanos quién eres y qué te gustaría presentar en FLOW CDMX. Si representas una marca o proyecto (no escenario), usa el formulario de colaboración.",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    instagram: "Instagram o web (opcional)",
    message: "¿Qué te gustaría presentar o cómo colaborar?",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    success: "Listo. Revisa tu correo; el equipo te contactará pronto.",
    error: "No se pudo enviar. Intenta de nuevo.",
  },
  en: {
    back: "← Back to FLOW CDMX",
    title: "Apply as a performing artist",
    lead: "Tell us who you are and what you’d like to present at FLOW CDMX. Brands and projects should use the collaboration form instead.",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    instagram: "Instagram or website (optional)",
    message: "What would you like to present or how would you like to collaborate?",
    submit: "Submit application",
    sending: "Sending…",
    success: "You’re all set. We’ll be in touch soon.",
    error: "Could not send. Please try again.",
  },
};

export function ArtistApplyForm({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = copy[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setErr(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/artist-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          instagram: instagram.trim() || null,
          message: message.trim(),
          locale,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(typeof data.error === "string" ? data.error : t.error);
        return;
      }
      setDone(true);
    } catch {
      setErr(t.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main lang={locale} className="min-h-screen bg-[#090b08] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.12),transparent_28%),linear-gradient(180deg,#090b08_0%,#0c140d_35%,#090b08_100%)]" />

      <div className="mx-auto max-w-xl px-5 py-12 md:px-10 md:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-sm text-lime-300/90 hover:text-lime-200">
            {t.back}
          </Link>
          <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={locale === "es" ? "text-lime-300" : "text-neutral-500 hover:text-white"}
            >
              Español
            </button>
            <span className="text-neutral-600">|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={locale === "en" ? "text-lime-300" : "text-neutral-500 hover:text-white"}
            >
              English
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">{t.title}</h1>
        <p className="mt-4 text-neutral-400">{t.lead}</p>
        <p className="mt-3 text-sm">
          <Link href="/colaborar" className="font-semibold text-lime-300/90 hover:text-lime-200">
            {locale === "es" ? "Marca o proyecto → colaborar aquí" : "Brand or project → collaborate here"}
          </Link>
        </p>

        {done ? (
          <p className="mt-10 rounded-2xl border border-lime-300/30 bg-lime-300/5 px-5 py-4 text-lime-100">{t.success}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-4">
            {err ? (
              <p className="rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">{err}</p>
            ) : null}
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.name}
              className="rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.email}
              className="rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.phone}
              className="rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
            />
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder={t.instagram}
              className="rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.message}
              rows={5}
              className="min-h-[120px] rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
            />
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? t.sending : t.submit}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
