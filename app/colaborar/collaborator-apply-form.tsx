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
    artistLink: string;
    name: string;
    email: string;
    phone: string;
    brand: string;
    linkedin: string;
    website: string;
    instagram: string;
    project: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  }
> = {
  es: {
    back: "← Volver a FLOW CDMX",
    title: "Colaborar como marca, productor o proyecto",
    lead: "Cuéntanos quién eres y qué te gustaría construir con FLOW CDMX. Si eres artista en escena, usa el formulario de artistas.",
    artistLink: "Soy artista → aplicar aquí",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    brand: "Marca o nombre del proyecto",
    linkedin: "LinkedIn (opcional)",
    website: "Sitio web (opcional)",
    instagram: "Instagram u otra red (opcional)",
    project: "Describe tu proyecto, qué ofreces y cómo te gustaría colaborar",
    submit: "Enviar",
    sending: "Enviando…",
    success: "Listo. Revisa tu correo; el equipo te contactará pronto.",
    error: "No se pudo enviar. Intenta de nuevo.",
  },
  en: {
    back: "← Back to FLOW CDMX",
    title: "Collaborate as a brand, producer, or project",
    lead: "Tell us who you are and what you’d like to build with FLOW CDMX. Performing artists should use the artist form.",
    artistLink: "I’m an artist → apply here",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    brand: "Brand or project name",
    linkedin: "LinkedIn (optional)",
    website: "Website (optional)",
    instagram: "Instagram or other social (optional)",
    project: "Describe your project, what you bring, and how you’d like to collaborate",
    submit: "Submit",
    sending: "Sending…",
    success: "You’re all set. We’ll be in touch soon.",
    error: "Could not send. Please try again.",
  },
};

export function CollaboratorApplyForm({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = copy[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brandOrProject, setBrandOrProject] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !projectDescription.trim()) return;
    setErr(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/collaborator-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          brand_or_project_name: brandOrProject.trim() || null,
          linkedin: linkedin.trim() || null,
          website: website.trim() || null,
          instagram: instagram.trim() || null,
          project_description: projectDescription.trim(),
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

        <h1 className="text-2xl font-black tracking-tight text-white md:text-3xl">{t.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t.lead}</p>
        <p className="mt-4">
          <Link href="/artistas/aplicar" className="text-sm font-semibold text-lime-300 hover:text-lime-200">
            {t.artistLink}
          </Link>
        </p>

        {!done ? (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {err ? (
              <p className="rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">{err}</p>
            ) : null}
            <input
              required
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.brand}
              value={brandOrProject}
              onChange={(e) => setBrandOrProject(e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.linkedin}
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.website}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.instagram}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <textarea
              required
              rows={6}
              className="w-full rounded-xl border border-lime-200/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/60"
              placeholder={t.project}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? t.sending : t.submit}
            </button>
          </form>
        ) : (
          <p className="mt-8 text-sm text-lime-200">{t.success}</p>
        )}
      </div>
    </main>
  );
}
