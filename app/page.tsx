"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { ChangeEvent, CSSProperties, ReactNode, RefObject } from "react";

type AppView =
  | "home"
  | "sponsors"
  | "tickets"
  | "inquiry"
  | "checkout"
  | "waitlist";

type SetView = (v: AppView) => void;

export type PassKind = "vip" | "supporter";

const HUERTO_SITE = "https://www.huertoromaverde.org/en/espacios";

/** Illustrative garden photography (Unsplash); venue is Huerto Roma Verde — see official site. */
const HUERTO_IMAGES: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=88&auto=format&fit=crop&crop=entropy",
    alt: "Lush vegetable rows — organic growing beds",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&q=88&auto=format&fit=crop",
    alt: "Tree-lined garden path and dappled light",
  },
  {
    src: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc7?w=1000&q=88&auto=format&fit=crop",
    alt: "Hands in soil — community planting",
  },
];

const C = {
  bg: "#0F0E0C",
  bg2: "#1A1814",
  bg3: "#232018",
  surface: "#2A2720",
  border: "#3A3730",
  borderLight: "#4A4740",
  gold: "#C4A96B",
  goldLight: "#D4BC82",
  olive: "#8B8456",
  text: "#F0EDE6",
  textMuted: "#9C9487",
  textFaint: "#6A6660",
};

const styles = {
  page: {
    background: C.bg,
    color: C.text,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  sans: { fontFamily: "'Helvetica Neue', Arial, sans-serif" },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: C.bg + "ee",
    backdropFilter: "blur(12px)",
    borderBottom: `0.5px solid ${C.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    height: 60,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  logo: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: C.text,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  logoSub: {
    fontSize: 10,
    letterSpacing: "0.2em",
    color: C.gold,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    marginLeft: 4,
    verticalAlign: "middle",
  },
  btnPrimary: {
    background: C.gold,
    color: C.bg,
    border: "none",
    padding: "10px 22px",
    borderRadius: 3,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.06em",
    cursor: "pointer",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    textTransform: "uppercase",
    transition: "background 0.15s",
  },
  btnSecondary: {
    background: "transparent",
    color: C.gold,
    border: `1px solid ${C.gold}`,
    padding: "10px 22px",
    borderRadius: 3,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.06em",
    cursor: "pointer",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    textTransform: "uppercase",
    transition: "all 0.15s",
  },
  btnGhost: {
    background: "transparent",
    color: C.textMuted,
    border: "none",
    padding: "10px 0",
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    letterSpacing: "0.04em",
    textDecoration: "underline",
    textUnderlineOffset: 3,
  },
  section: {
    padding: "100px 48px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionFull: {
    padding: "100px 48px",
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: "0.18em",
    color: C.gold,
    textTransform: "uppercase",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    marginBottom: 16,
  },
  h1: {
    fontSize: "clamp(52px, 10vw, 120px)",
    fontWeight: 400,
    lineHeight: 0.95,
    letterSpacing: "-0.02em",
    color: C.text,
    margin: 0,
  },
  h2: {
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: 400,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    color: C.text,
    margin: 0,
  },
  h3: {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: 400,
    lineHeight: 1.15,
    color: C.text,
    margin: 0,
  },
  body: {
    fontSize: 16,
    lineHeight: 1.75,
    color: C.textMuted,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    maxWidth: 520,
  },
  divider: {
    border: "none",
    borderTop: `0.5px solid ${C.border}`,
    margin: "0",
  },
  card: {
    background: C.surface,
    border: `0.5px solid ${C.border}`,
    borderRadius: 8,
    padding: "32px",
    transition: "border-color 0.2s, transform 0.2s",
  },
  input: {
    background: C.bg3,
    border: `0.5px solid ${C.border}`,
    borderRadius: 4,
    padding: "12px 16px",
    fontSize: 14,
    color: C.text,
    width: "100%",
    outline: "none",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    transition: "border-color 0.15s",
    boxSizing: "border-box",
  },
  label: {
    fontSize: 12,
    letterSpacing: "0.08em",
    color: C.textMuted,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    textTransform: "uppercase",
    marginBottom: 8,
    display: "block",
  },
} satisfies Record<string, CSSProperties>;

function OrganicBackdrop() {
  return (
    <div className="flow-organic-backdrop" aria-hidden>
      <div className="flow-organic-backdrop__glow" />
      <div className="flow-organic-backdrop__leaves" />
    </div>
  );
}

function ScrollVines() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = y / max;
      el.style.transform = `translate3d(0, ${-p * 140}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={wrapRef} className="flow-scroll-vines" aria-hidden>
      <svg viewBox="0 0 1200 1600" preserveAspectRatio="xMidYMin slice">
        <path
          d="M-20 120 Q 200 60 400 140 T 900 100 T 1220 180"
          stroke="rgba(196,169,107,0.22)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M1220 320 Q 900 400 600 340 T 100 380"
          stroke="rgba(196,169,107,0.16)"
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d="M0 620 Q 300 560 600 660 T 1200 600"
          stroke="rgba(139,132,86,0.2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M1200 900 Q 800 980 400 880 T 0 940"
          stroke="rgba(196,169,107,0.14)"
          strokeWidth="0.85"
          fill="none"
        />
        <path
          d="M80 1180 Q 400 1120 720 1220 T 1180 1160"
          stroke="rgba(196,169,107,0.18)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

function LeafCursor() {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setActive(true);
    document.documentElement.classList.add("flow-leaf-cursor");
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("flow-leaf-cursor");
    };
  }, []);
  if (!active) return null;
  return (
    <div
      className="flow-leaf-cursor-dot"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 1C9 7 5 13 7 19c3-1.5 6-1 8 2 2-5-1-13-1-20z"
          stroke="#C4A96B"
          strokeWidth="1.1"
          fill="rgba(196,169,107,0.12)"
        />
        <path d="M14 8v10M11 12h6" stroke="#D4BC82" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
}

function useInView(threshold = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function Nav({ setView }: { setView: SetView }) {
  const [open, setOpen] = useState(false);
  const go = (l: string) => {
    setOpen(false);
    if (l === "Sponsors") setView("sponsors");
    else document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav style={{ ...styles.nav }} className="flow-nav">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", minHeight: 56 }}>
        <div onClick={() => { setOpen(false); setView("home"); }} style={{ cursor: "pointer" }}>
          <span style={styles.logo}>FLOW</span>
          <span style={styles.logoSub}>CDMX</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="flow-nav-links flow-nav-links--desktop">
            {["About", "Experience", "Sponsors"].map((l) => (
              <button
                key={l}
                type="button"
                style={{ ...styles.btnGhost, textDecoration: "none", color: C.textMuted, fontSize: 13, letterSpacing: "0.06em" }}
                onClick={() => go(l)}
              >
                {l}
              </button>
            ))}
            <button type="button" style={styles.btnPrimary} onClick={() => setView("tickets")}>
              Get access
            </button>
          </div>
          <button
            type="button"
            className="flow-nav-mobile-toggle"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`flow-nav-drawer${open ? " flow-nav-drawer--open" : ""}`}>
        {["About", "Experience", "Sponsors"].map((l) => (
          <button
            key={l}
            type="button"
            style={{ ...styles.btnGhost, textDecoration: "none", color: C.textMuted, fontSize: 14, textAlign: "left", padding: "10px 0" }}
            onClick={() => go(l)}
          >
            {l}
          </button>
        ))}
        <button type="button" style={{ ...styles.btnPrimary, alignSelf: "flex-start", marginTop: 8 }} onClick={() => { setOpen(false); setView("tickets"); }}>
          Get access
        </button>
      </div>
    </nav>
  );
}

function Hero({ setView }: { setView: SetView }) {
  return (
    <section
      className="flow-hero"
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderBottom: `0.5px solid ${C.border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse 60% 50% at 70% 40%, ${C.olive}18 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "12%", right: "6%", width: 1, height: "45%", background: C.border }} />
      <div style={{ position: "absolute", top: "12%", right: "6%", width: 5, height: 5, borderRadius: "50%", background: C.gold, transform: "translate(-2px, -2px)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ ...styles.eyebrow, marginBottom: 32 }}>April 30 · Huerto Roma Verde · Mexico City</div>
        <h1 style={styles.h1}>
          <span style={{ display: "block", color: C.text }}>FLOW</span>
          <span style={{ display: "block", color: C.gold, fontStyle: "italic" }}>CDMX</span>
        </h1>
        <div className="flow-hero-row" style={{ marginTop: 40 }}>
          <p style={{ ...styles.body, fontSize: 18, maxWidth: 480, margin: 0 }}>
            A cultural gathering during Sundance week. Film. Music. Conversation. Community. In motion.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button type="button" style={styles.btnPrimary} onClick={() => setView("tickets")}>
              Get access
            </button>
            <button type="button" style={styles.btnSecondary} onClick={() => setView("sponsors")}>
              Become a partner
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "56px auto 0", width: "100%" }} className="flow-grid-hero-stats">
        {[
          { n: "200–300", l: "Curated attendees" },
          { n: "1 Day", l: "April 30, 2025" },
          { n: "Roma Sur", l: "Huerto Roma Verde" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              padding: "28px 0 0",
              borderRight: i < 2 ? `0.5px solid ${C.border}` : "none",
              paddingRight: i < 2 ? 32 : 0,
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 400, color: C.text, letterSpacing: "-0.02em" }}>{s.n}</div>
            <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: C.bg2 }}>
      <div className="flow-section flow-grid-2" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={styles.eyebrow}>About</div>
          <h2 style={styles.h2}>Film. Music.<br />Conversation.<br />Community.</h2>
        </FadeUp>
        <FadeUp delay={150}>
          <p style={{ ...styles.body, maxWidth: "100%", marginBottom: 24 }}>
            FLOW CDMX is an independent cultural side event during Sundance CDMX week. We bring together filmmakers, artists, musicians, founders, and cultural leaders for a day of shared experience.
          </p>
          <p style={{ ...styles.body, maxWidth: "100%" }}>
            This is not a festival. It is a moment — intentionally built for the people who make things, fund things, and shape culture. Off-schedule. Off-script. Fully present.
          </p>
          <div className="flow-tag-row" style={{ marginTop: 40 }}>
            {["Film screenings", "Live conversations", "Music & DJs", "Wellness rituals"].map((p) => (
              <div key={p} style={{ fontSize: 12, color: C.gold, fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p}</div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Moment() {
  return (
    <section style={{ background: C.bg, borderTop: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section" style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "clamp(72px, 12vw, 120px)", paddingBottom: "clamp(72px, 12vw, 120px)", textAlign: "center" }}>
        <FadeUp>
          <div style={styles.eyebrow}>Why this moment</div>
          <h2 style={{ ...styles.h2, fontSize: "clamp(32px, 5vw, 60px)", maxWidth: 800, margin: "0 auto 32px" }}>
            Sundance comes to CDMX.<br />The energy spills over.
          </h2>
          <p style={{ ...styles.body, margin: "0 auto", textAlign: "center", maxWidth: 560, fontSize: 17 }}>
            The official calendar fills fast. The real conversations happen elsewhere. We built the elsewhere — where filmmakers meet founders, artists meet brands, and culture actually moves.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ background: C.bg2, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={styles.eyebrow}>The experience</div>
          <h2 style={{ ...styles.h2, marginBottom: 64 }}>Day into night.</h2>
        </FadeUp>
        <div className="flow-grid-2-stacked">
          <FadeUp delay={100}>
            <div style={{ background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: "8px 0 0 8px", padding: 48 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: C.olive, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 20 }}>Morning & Afternoon</div>
              <h3 style={{ ...styles.h3, fontSize: 28, marginBottom: 32 }}>Intention.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { t: "Cacao ceremony", d: "An intentional opening ritual" },
                  { t: "Film screenings", d: "Curated independent works" },
                  { t: "Live conversations", d: "Intimate filmmaker interviews" },
                  { t: "Wellness experiences", d: "Breathwork and body practice" },
                  { t: "Garden dining", d: "Communal meals in Huerto Roma" },
                ].map(i => (
                  <div key={i.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 1, background: C.olive, alignSelf: "stretch", flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{i.t}</div>
                      <div style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginTop: 2 }}>{i.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div style={{ background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: "0 8px 8px 0", padding: 48 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: C.gold, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 20 }}>Evening</div>
              <h3 style={{ ...styles.h3, fontSize: 28, marginBottom: 32, color: C.gold }}>Celebration.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { t: "Live music", d: "Original performances in the garden" },
                  { t: "DJ sets", d: "Curated sound through the night" },
                  { t: "Open bar", d: "Premium beverage partner" },
                  { t: "Candlelight networking", d: "Real connections in real time" },
                  { t: "Community moments", d: "Unexpected collaborations" },
                ].map(i => (
                  <div key={i.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 1, background: C.gold, alignSelf: "stretch", flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{i.t}</div>
                      <div style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginTop: 2 }}>{i.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const stats = [
    { n: "28–42", l: "Avg. age range" },
    { n: "EN / ES", l: "Bilingual creative class" },
    { n: "Int'l + CDMX", l: "Global + local mix" },
    { n: "Tastemakers", l: "Active platforms, real reach" },
  ];
  return (
    <section style={{ background: C.bg, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section flow-grid-2" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeUp>
            <div style={styles.eyebrow}>The audience</div>
            <h2 style={{ ...styles.h2, fontSize: "clamp(28px, 4vw, 48px)" }}>The room you've been trying to reach.</h2>
            <p style={{ ...styles.body, marginTop: 24 }}>
              International filmmakers. Artists. Founders. Musicians. Media voices. Cultural producers. The people who shape taste — and who are allergic to traditional advertising.
            </p>
          </FadeUp>
          <FadeUp delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 8 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ background: C.surface, border: `0.5px solid ${C.border}`, padding: "28px 24px", borderRadius: i === 0 ? "8px 0 0 0" : i === 1 ? "0 8px 0 0" : i === 2 ? "0 0 0 8px" : "0 0 8px 0" }}>
                  <div style={{ fontSize: 26, fontWeight: 400, color: C.text, marginBottom: 6 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Filmmakers", "Artists", "Musicians", "Founders", "Media", "Wellness leaders", "Creative entrepreneurs", "International press"].map(t => (
                <span key={t} style={{ fontSize: 12, color: C.textMuted, border: `0.5px solid ${C.border}`, borderRadius: 3, padding: "5px 12px", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{t}</span>
              ))}
            </div>
          </FadeUp>
    </div>
    </section>
  );
}

function Venue() {
  return (
    <section style={{ background: C.bg3, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section flow-grid-2" style={{ maxWidth: 1200, margin: "0 auto", alignItems: "start" }}>
        <FadeUp>
          <div className="flow-venue-gallery" style={{ border: `0.5px solid ${C.border}` }}>
            <div className="flow-venue-gallery__main">
              <Image
                src={HUERTO_IMAGES[0].src}
                alt={HUERTO_IMAGES[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flow-venue-gallery__sub">
              <Image
                src={HUERTO_IMAGES[1].src}
                alt={HUERTO_IMAGES[1].alt}
                fill
                sizes="(max-width: 768px) 50vw, 22vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flow-venue-gallery__sub">
              <Image
                src={HUERTO_IMAGES[2].src}
                alt={HUERTO_IMAGES[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 22vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <p className="flow-image-caption">
            Garden imagery is illustrative of the atmosphere at Huerto Roma Verde. Explore spaces and booking on the{" "}
            <a href={HUERTO_SITE} target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: "underline", textUnderlineOffset: 3 }}>
              official Huerto Roma Verde site
            </a>
            .
          </p>
        </FadeUp>
        <FadeUp delay={150}>
          <div style={styles.eyebrow}>The venue</div>
          <h2 style={{ ...styles.h2, fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 24 }}>Huerto Roma Verde.</h2>
          <p style={{ ...styles.body, maxWidth: "100%", marginBottom: 16 }}>
            ~3,000m² biosocial garden and community hub in Roma Sur (Jalapa 234) — a green oasis and events campus in the
            heart of Mexico City.
          </p>
          <p style={{ ...styles.body, maxWidth: "100%" }}>
            Outdoor halls, mandala gardens, terraces, and the Bambudésica dome — intimate, photogenic, alive. The venue
            is not a backdrop. It&apos;s a collaborator.
          </p>
          <div className="flow-tag-row" style={{ marginTop: 32 }}>
            {["Permaculture garden", "Roma Sur", "Event halls", "Iconic CDMX"].map((f) => (
              <div key={f} style={{ fontSize: 12, color: C.olive, fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>{f}</div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function SponsorCTA({ setView }: { setView: SetView }) {
  return (
    <section id="sponsors" style={{ background: C.bg, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section flow-grid-2" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div>
            <div style={styles.eyebrow}>For brands</div>
            <h2 style={{ ...styles.h2, fontSize: "clamp(28px, 4vw, 52px)", marginBottom: 24 }}>Your brand.<br />In the room.</h2>
            <p style={{ ...styles.body, maxWidth: "100%" }}>
              FLOW CDMX gives sponsors authentic presence in a curated, trust-rich environment. This is not a banner placement. It&apos;s a cultural partnership.
            </p>
            <p style={{ ...styles.body, maxWidth: "100%", marginTop: 16 }}>
              Your brand becomes part of the story — integrated into programming, content, and community.
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button type="button" style={styles.btnPrimary} onClick={() => setView("sponsors")}>
                View packages
              </button>
              <button type="button" style={styles.btnSecondary} onClick={() => setView("inquiry")}>
                Inquire now
              </button>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={120}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
            {[
              { t: "Authentic presence", d: "Brand integration in a high-trust creative environment" },
              { t: "Content assets", d: "Professional photo + video from premium production" },
              { t: "Community access", d: "Direct reach to filmmakers, artists, and cultural leaders" },
              { t: "Platform entry", d: "First access to a growing multi-city cultural platform" },
            ].map((v) => (
              <div key={v.t} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 0", borderBottom: `0.5px solid ${C.border}` }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 4 }}>{v.t}</div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function SponsorPackages({ setView }: { setView: SetView }) {
  const tiers = [
    {
      name: "Presenting",
      price: "$11,000",
      currency: "USD",
      tag: "★ Flagship tier",
      featured: true,
      benefits: [
        "Co-title credit on core materials",
        "Priority placement + activation zone",
        "10 VIP passes",
        "Full content package (photo + video)",
        "Co-presented film moment",
        "Social amplification",
      ],
    },
    {
      name: "Cultural",
      price: "$5,550",
      currency: "USD",
      tag: null,
      featured: false,
      benefits: ["Logo on materials", "Branded zone", "6 VIP passes", "Content inclusion", "Product placement"],
    },
    {
      name: "Community",
      price: "$2,220",
      currency: "USD",
      tag: null,
      featured: false,
      benefits: ["Logo placement", "3 VIP passes", "Gifting / sampling", "Social mention"],
    },
    {
      name: "Main Partner",
      price: "From $50,000",
      currency: "Custom",
      tag: "Tailored",
      featured: false,
      benefits: [
        "Bespoke partnership architecture",
        "Naming + narrative co-creation",
        "Expanded passes & hospitality",
        "Dedicated content + integrations",
        "Multi-touch brand storytelling",
      ],
    },
  ];

  return (
    <section style={{ background: C.bg2, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={styles.eyebrow}>Sponsor packages</div>
          <h2 style={{ ...styles.h2, marginBottom: 16 }}>Choose your presence.</h2>
          <p style={{ ...styles.body, marginBottom: 64 }}>Limited positions. Tiers flex with your goals — start the conversation early.</p>
        </FadeUp>
        <div className="flow-grid-4 flow-card-4" style={{ gap: 2 }}>
          {tiers.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div style={{
                ...styles.card,
                borderRadius: i === 0 ? "8px 0 0 8px" : i === 3 ? "0 8px 8px 0" : 0,
                border: t.featured ? `1px solid ${C.gold}` : `0.5px solid ${C.border}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
                {t.tag && (
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", color: C.gold, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 16 }}>{t.tag}</div>
                )}
                <div style={{ fontSize: 11, letterSpacing: "0.14em", color: C.textMuted, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 8 }}>{t.name}</div>
                <div style={{ fontSize: 32, fontWeight: 400, color: C.text, marginBottom: 4 }}>{t.price}</div>
                <div style={{ fontSize: 12, color: C.textFaint, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 28 }}>{t.currency}</div>
                <hr style={{ ...styles.divider, marginBottom: 24 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {t.benefits.map(b => (
                    <div key={b} style={{ display: "flex", gap: 10, fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                      <span style={{ color: C.olive, flexShrink: 0 }}>—</span>
                      {b}
                    </div>
                  ))}
                </div>
                <button
                  style={{ ...styles.btnPrimary, width: "100%", marginTop: 28, textAlign: "center" }}
                  onClick={() => setView("inquiry")}
                >
                  Apply
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tickets({
  setView,
  onSelectPass,
}: {
  setView: SetView;
  onSelectPass: (kind: PassKind) => void;
}) {
  const passes: {
    name: string;
    price: string;
    currency: string;
    tag: string | null;
    featured: boolean;
    features: string[];
    kind?: PassKind;
  }[] = [
    {
      name: "VIP Pass",
      price: "$111",
      currency: "USD",
      tag: "Full experience",
      featured: true,
      kind: "vip",
      features: [
        "Full day + night access",
        "Curated welcome & cacao",
        "Priority seating at screenings",
        "Curated networking moments",
        "Event content access",
      ],
    },
    {
      name: "Supporter Pass",
      price: "$33",
      currency: "USD",
      tag: null,
      featured: false,
      kind: "supporter",
      features: ["Full day + night access", "General admission", "All programming included"],
    },
    {
      name: "RSVP",
      price: "Free",
      currency: "Invite review",
      tag: null,
      featured: false,
      features: ["Waitlist access", "Subject to curation", "We'll be in touch"],
    },
  ];

  return (
    <section style={{ background: C.bg, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={styles.eyebrow}>Access</div>
          <h2 style={{ ...styles.h2, marginBottom: 16 }}>Join the gathering.</h2>
          <p style={{ ...styles.body, marginBottom: 64 }}>Curated access. Limited spots. April 30, Huerto Roma Verde.</p>
        </FadeUp>
        <div className="flow-grid-3 flow-card-3" style={{ gap: 2 }}>
          {passes.map((p, i) => (
            <FadeUp key={p.name} delay={i * 80}>
              <div
                style={{
                  ...styles.card,
                  borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : 0,
                  border: p.featured ? `1px solid ${C.gold}` : `0.5px solid ${C.border}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.tag && (
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", color: C.gold, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 12 }}>{p.tag}</div>
                )}
                <div style={{ fontSize: 11, letterSpacing: "0.14em", color: C.textMuted, textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 36, fontWeight: 400, color: p.featured ? C.gold : C.text, marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 12, color: C.textFaint, fontFamily: "'Helvetica Neue', Arial, sans-serif", marginBottom: 28 }}>{p.currency}</div>
                <hr style={{ ...styles.divider, marginBottom: 24 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                      <span style={{ color: C.gold, flexShrink: 0 }}>—</span>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  style={{ ...(p.featured ? styles.btnPrimary : styles.btnSecondary), width: "100%", marginTop: 28, textAlign: "center" }}
                  onClick={() => {
                    if (p.name === "RSVP") setView("waitlist");
                    else if (p.kind) {
                      onSelectPass(p.kind);
                      setView("checkout");
                    }
                  }}
                >
                  {p.name === "RSVP" ? "Join waitlist" : "Get pass"}
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function FuturePlatform() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section style={{ background: C.bg3, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section" style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <FadeUp>
          <div style={styles.eyebrow}>Platform</div>
          <h2 style={{ ...styles.h2, margin: "0 auto 24px", maxWidth: 700 }}>This is just the beginning.</h2>
          <p style={{ ...styles.body, margin: "0 auto 48px", textAlign: "center", maxWidth: 500, fontSize: 16 }}>
            FLOW CDMX is building a cultural platform — multi-city gatherings, digital editorial, and exclusive community access for the people who shape culture.
          </p>
          {!done ? (
            <div className="flow-email-row">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ ...styles.input, borderRadius: "4px 0 0 4px", borderRight: "none", flex: 1, minWidth: 0 }}
              />
              <button
                type="button"
                style={{ ...styles.btnPrimary, borderRadius: "0 4px 4px 0", whiteSpace: "nowrap", padding: "12px 24px" }}
                onClick={() => {
                  if (email) setDone(true);
                }}
              >
                Stay connected
              </button>
            </div>
          ) : (
            <div style={{ fontSize: 15, color: C.gold, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>You&apos;re in. We&apos;ll be in touch.</div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

type InquiryFields = {
  name: string;
  company: string;
  role: string;
  email: string;
  tier: string;
  message: string;
};

function InquiryForm() {
  const [form, setForm] = useState<InquiryFields>({
    name: "",
    company: "",
    role: "",
    email: "",
    tier: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const set =
    (k: keyof InquiryFields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section style={{ background: C.bg2, borderBottom: `0.5px solid ${C.border}` }}>
      <div className="flow-section" style={{ maxWidth: 700, margin: "0 auto" }}>
        <FadeUp>
          <div style={styles.eyebrow}>Partner inquiry</div>
          <h2 style={{ ...styles.h2, fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 16 }}>Let&apos;s talk.</h2>
          <p style={{ ...styles.body, marginBottom: 48 }}>Limited sponsorship positions. Tell us about your brand and we&apos;ll follow up within 48 hours.</p>
        </FadeUp>
        {!sent ? (
          <FadeUp delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="flow-inquiry-grid">
                <div>
                  <label style={styles.label}>Name</label>
                  <input style={styles.input} placeholder="Your name" value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label style={styles.label}>Company</label>
                  <input style={styles.input} placeholder="Brand or agency" value={form.company} onChange={set("company")} />
                </div>
              </div>
              <div className="flow-inquiry-grid">
                <div>
                  <label style={styles.label}>Role</label>
                  <input style={styles.input} placeholder="Your title" value={form.role} onChange={set("role")} />
                </div>
                <div>
                  <label style={styles.label}>Email</label>
                  <input style={styles.input} placeholder="your@email.com" type="email" value={form.email} onChange={set("email")} />
                </div>
              </div>
              <div>
                <label style={styles.label}>Sponsor tier interest</label>
                <select style={{ ...styles.input, appearance: "none" }} value={form.tier} onChange={set("tier")}>
                  <option value="">Select a tier</option>
                  <option>Presenting — $11,000</option>
                  <option>Cultural — $5,550</option>
                  <option>Community — $2,220</option>
                  <option>Main Partner — from $50,000 (custom)</option>
                  <option>In-kind / hybrid</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>Message</label>
                <textarea
                  style={{ ...styles.input, minHeight: 120, resize: "vertical" }}
                  placeholder="Tell us about your brand and what you're looking for..."
                  value={form.message}
                  onChange={set("message")}
                />
              </div>
              <button
                style={{ ...styles.btnPrimary, alignSelf: "flex-start", padding: "14px 32px", fontSize: 14 }}
                onClick={() => { if (form.name && form.email) setSent(true); }}
              >
                Send inquiry
              </button>
            </div>
          </FadeUp>
        ) : (
          <div style={{ padding: "48px 0", borderTop: `0.5px solid ${C.border}` }}>
            <div style={{ fontSize: 24, fontWeight: 400, color: C.gold, marginBottom: 12 }}>Thank you, {form.name}.</div>
            <p style={{ ...styles.body }}>We've received your inquiry and will follow up within 48 hours. Looking forward to building this together.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer({ setView }: { setView: SetView }) {
  return (
    <footer style={{ background: C.bg, borderTop: `0.5px solid ${C.border}`, padding: "60px 48px" }}>
      <div className="flow-footer-row" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <div style={{ ...styles.logo, fontSize: 22, marginBottom: 8 }}>
            FLOW <span style={{ fontSize: 12, letterSpacing: "0.2em", color: C.gold }}>CDMX</span>
          </div>
          <div style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>April 30 · Huerto Roma Verde · Roma Sur, CDMX</div>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {(
            [
              { l: "Tickets", v: "tickets" },
              { l: "Sponsors", v: "sponsors" },
              { l: "Inquire", v: "inquiry" },
            ] satisfies { l: string; v: AppView }[]
          ).map((l) => (
            <button key={l.l} style={{ ...styles.btnGhost, textDecoration: "none", color: C.textMuted }} onClick={() => setView(l.v)}>{l.l}</button>
          ))}
        </div>
        <div style={{ fontSize: 12, color: C.textFaint, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          © FLOW CDMX 2025 · flowcdmx.com
        </div>
      </div>
    </footer>
  );
}

function CheckoutPage({ passKind, setView }: { passKind: PassKind; setView: SetView }) {
  const [step, setStep] = useState("select");
  const isVip = passKind === "vip";
  const price = isVip ? "$111" : "$33";
  const name = isVip ? "VIP Pass" : "Supporter Pass";

  if (step === "confirm") {
    return (
      <div style={{ ...styles.sectionFull, background: C.bg, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ width: 56, height: 56, border: `1px solid ${C.gold}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <h2 style={{ ...styles.h2, fontSize: 36, marginBottom: 16 }}>You're in.</h2>
          <p style={{ ...styles.body, textAlign: "center", margin: "0 auto 32px" }}>
            Your {name} is confirmed. See you April 30 at Huerto Roma Verde, Roma Sur.
          </p>
          <button style={styles.btnGhost} onClick={() => setView("home")}>Back to FLOW CDMX</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.bg, minHeight: "80vh" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 48px" }}>
        <button style={{ ...styles.btnGhost, marginBottom: 48 }} onClick={() => setView("tickets")}>← Back to tickets</button>
        <div style={styles.eyebrow}>Checkout</div>
        <h2 style={{ ...styles.h2, fontSize: 36, marginBottom: 40 }}>{name}</h2>
        <div style={{ ...styles.card, marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 16, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{name}</div>
            <div style={{ fontSize: 20, color: C.gold }}>{price}</div>
          </div>
          <div style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>April 30 · Huerto Roma Verde · Roma Sur, CDMX</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          <div>
            <label style={styles.label}>Full name</label>
            <input style={styles.input} placeholder="Your name" />
          </div>
          <div>
            <label style={styles.label}>Email</label>
            <input style={styles.input} placeholder="your@email.com" type="email" />
          </div>
          <div>
            <label style={styles.label}>Card number</label>
            <input style={styles.input} placeholder="•••• •••• •••• ••••" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={styles.label}>Expiry</label>
              <input style={styles.input} placeholder="MM / YY" />
            </div>
            <div>
              <label style={styles.label}>CVV</label>
              <input style={styles.input} placeholder="•••" />
            </div>
          </div>
        </div>
        <button style={{ ...styles.btnPrimary, width: "100%", padding: "16px", fontSize: 15 }} onClick={() => setStep("confirm")}>
          Complete purchase — {price}
        </button>
        <div style={{ fontSize: 12, color: C.textFaint, fontFamily: "'Helvetica Neue', Arial, sans-serif", textAlign: "center", marginTop: 16 }}>
          Powered by Stripe · SSL encrypted
        </div>
      </div>
    </div>
  );
}

function WaitlistPage({ setView }: { setView: SetView }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div style={{ background: C.bg, minHeight: "80vh" }}>
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "80px 48px" }}>
        <button style={{ ...styles.btnGhost, marginBottom: 48 }} onClick={() => setView("tickets")}>← Back to tickets</button>
        <div style={styles.eyebrow}>RSVP waitlist</div>
        <h2 style={{ ...styles.h2, fontSize: 36, marginBottom: 16 }}>You're on the list.</h2>
        <p style={{ ...styles.body, marginBottom: 40 }}>RSVP spots are curated. Drop your email and we'll be in touch if there's a fit.</p>
        {!done ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input style={styles.input} type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            <button style={{ ...styles.btnPrimary, padding: "14px" }} onClick={() => { if (email) setDone(true); }}>Join waitlist</button>
          </div>
        ) : (
          <div style={{ padding: "32px 0", borderTop: `0.5px solid ${C.border}` }}>
            <div style={{ fontSize: 18, color: C.gold, marginBottom: 12 }}>You're on the list.</div>
            <p style={{ ...styles.body }}>We'll reach out before April 30 if there's a spot for you.</p>
            <button style={{ ...styles.btnGhost, marginTop: 24 }} onClick={() => setView("home")}>Back to FLOW CDMX</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  const [view, setView] = useState<AppView>("home");
  const [passKind, setPassKind] = useState<PassKind>("vip");

  const scrollToTop = () => window.scrollTo({ top: 0 });

  useEffect(() => {
    scrollToTop();
  }, [view]);

  return (
    <div className="flow-page-root" style={styles.page}>
      <OrganicBackdrop />
      <ScrollVines />
      <LeafCursor />
      <div className="flow-content">
      <Nav setView={(v) => { setView(v); }} />
      {view === "home" && (
        <>
          <Hero setView={setView} />
          <About />
          <Moment />
          <Experience />
          <Audience />
          <Venue />
          <SponsorCTA setView={setView} />
          <SponsorPackages setView={setView} />
          <Tickets setView={setView} onSelectPass={setPassKind} />
          <FuturePlatform />
          <InquiryForm />
          <Footer setView={setView} />
        </>
      )}
      {view === "sponsors" && (
        <>
          <div style={{ background: C.bg, padding: "80px 48px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <button style={{ ...styles.btnGhost, marginBottom: 40 }} onClick={() => setView("home")}>← Back</button>
            </div>
          </div>
          <SponsorCTA setView={setView} />
          <SponsorPackages setView={setView} />
          <InquiryForm />
          <Footer setView={setView} />
        </>
      )}
      {view === "tickets" && (
        <>
          <div style={{ background: C.bg, padding: "80px 48px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <button style={{ ...styles.btnGhost, marginBottom: 40 }} onClick={() => setView("home")}>← Back</button>
            </div>
          </div>
          <Tickets setView={setView} onSelectPass={setPassKind} />
          <Footer setView={setView} />
        </>
      )}
      {view === "inquiry" && (
        <>
          <div style={{ background: C.bg2, padding: "80px 48px 0" }}>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <button style={{ ...styles.btnGhost, marginBottom: 40 }} onClick={() => setView("home")}>← Back</button>
            </div>
          </div>
          <InquiryForm />
          <Footer setView={setView} />
        </>
      )}
      {view === "checkout" && <CheckoutPage passKind={passKind} setView={setView} />}
      {view === "waitlist" && <WaitlistPage setView={setView} />}
      </div>
    </div>
  );
}