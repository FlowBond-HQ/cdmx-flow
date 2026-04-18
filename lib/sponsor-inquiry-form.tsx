"use client";

import { FormEvent, useState } from "react";
import type { SponsorsCopy } from "./sponsors-content";

const MAX = {
  name: 200,
  email: 320,
  brand: 200,
  description: 4000,
  offering: 2000,
  website: 500,
  social: 500,
  contact: 500,
};

export function SponsorInquiryForm({ copy }: { copy: SponsorsCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [offering, setOffering] = useState("");
  const [website, setWebsite] = useState("");
  const [social, setSocial] = useState("");
  const [contactLine, setContactLine] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setErr(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/sponsor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim().slice(0, MAX.name),
          email: email.trim().toLowerCase().slice(0, MAX.email),
          brand_name: brandName.trim().slice(0, MAX.brand) || null,
          description: description.trim().slice(0, MAX.description) || null,
          offering: offering.trim().slice(0, MAX.offering) || null,
          website: website.trim().slice(0, MAX.website) || null,
          social: social.trim().slice(0, MAX.social) || null,
          contact_line: contactLine.trim().slice(0, MAX.contact) || null,
          locale: copy.lang,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(typeof data.error === "string" ? data.error : copy.formSubmitError);
        return;
      }
      setDone(true);
    } catch {
      setErr(copy.formSubmitError);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <p className="rounded-2xl border border-lime-300/30 bg-lime-300/5 px-6 py-5 text-sm text-lime-100">
        {copy.formSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-lime-200/10 bg-zinc-900/70 p-6 md:grid-cols-2 md:p-8">
      {err ? (
        <p className="md:col-span-2 rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">{err}</p>
      ) : null}
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50"
        placeholder={copy.formLabels.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        maxLength={MAX.name}
      />
      <input
        type="email"
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50"
        placeholder={copy.formLabels.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={MAX.email}
        autoComplete="email"
      />
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50"
        placeholder={copy.formLabels.brand}
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        maxLength={MAX.brand}
      />
      <textarea
        className="min-h-24 rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50 md:col-span-2"
        placeholder={copy.formLabels.description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={MAX.description}
      />
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50 md:col-span-2"
        placeholder={copy.formLabels.bringing}
        value={offering}
        onChange={(e) => setOffering(e.target.value)}
        maxLength={MAX.offering}
      />
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50"
        placeholder={copy.formLabels.website}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        maxLength={MAX.website}
      />
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50"
        placeholder={copy.formLabels.social}
        value={social}
        onChange={(e) => setSocial(e.target.value)}
        maxLength={MAX.social}
      />
      <input
        className="rounded-xl border border-lime-200/20 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-300/50 md:col-span-2"
        placeholder={copy.formLabels.contact}
        value={contactLine}
        onChange={(e) => setContactLine(e.target.value)}
        maxLength={MAX.contact}
      />
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-full bg-lime-300 px-7 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-lime-200 disabled:opacity-60 md:col-span-2"
      >
        {submitting ? copy.formSending : copy.formLabels.submit}
      </button>
    </form>
  );
}
