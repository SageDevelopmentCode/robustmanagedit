"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Pause, Play } from "lucide-react";
import { guide } from "@/content/site";
import { DotSurface } from "./DotSurface";

const SLIDES = [
  {
    kicker: "Free · 30–60 minutes",
    title: "Free Cyber Risk Assessment",
    body: "Find out whether your systems are protected from hackers, viruses and internal breaches, and where to focus first.",
    cta: "Book my assessment",
    help: "Free security assessment",
    card: { title: "What we review", items: ["Endpoint & email security", "Backups and recovery readiness", "Network, Wi-Fi and remote access", "User accounts and MFA", "Compliance exposure"] },
  },
  {
    kicker: "Compliance",
    title: "HIPAA and DoD compliance, handled",
    body: "We've guided a social-services non-profit through HIPAA and a manufacturer through Department of Defense requirements.",
    cta: "Talk to a compliance specialist",
    help: "Compliance (HIPAA, DoD, etc.)",
    card: { title: "How we get you there", items: ["Risk assessment and gap analysis", "Access controls and encryption", "Policies and documentation", "Staff security training", "Ongoing monitoring and audits"] },
  },
  {
    kicker: "Free guide",
    title: guide.title,
    body: "Know what to ask before you sign anything. Separate real IT partners from the ones who'll leave you on hold.",
    cta: "Get my free copy",
    help: "Free guide: 16 Questions",
    card: { title: "Inside the guide", items: ["Response-time questions to ask", "What a fair contract looks like", "Security and backup must-haves", "Red flags in IT proposals", "How to compare providers"] },
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // No auto-advance while paused, hovered/focused, or when the visitor prefers reduced motion.
    if (paused || hover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => window.clearTimeout(id);
  }, [i, paused, hover]);

  const s = SLIDES[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocusCapture={() => setHover(true)}
      onBlurCapture={() => setHover(false)}
      className="relative isolate overflow-hidden bg-[linear-gradient(225deg,#ff0b43_0%,#eb0b45_50%,#c4093a_100%)] text-white"
    >
      <DotSurface className="absolute inset-0 -z-10 h-full w-full" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/robust-mark.png" alt="" aria-hidden="true" className="mark-white pointer-events-none absolute -bottom-24 right-[8%] -z-10 h-[125%] w-auto opacity-[0.12]" />
      <div className="mx-auto grid min-h-[560px] max-w-[1320px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_1fr] lg:px-10">
        <div key={i} className="animate-[fadeIn_.5s_ease-out]" aria-live={paused ? "polite" : "off"}>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/85">{s.kicker}</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.6rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl">{s.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{s.body}</p>
          <a
            href="#contact"
            data-help={s.help}
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-white bg-white px-6 text-sm font-bold uppercase tracking-wider text-brand transition hover:bg-transparent hover:text-white"
          >
            {s.cta}
            <span className="grid size-6 place-items-center rounded-full border-2 border-current">
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
        <div key={`c${i}`} className="hidden animate-[fadeIn_.6s_ease-out] justify-self-end rounded-lg bg-white p-7 text-[#1f2937] shadow-2xl lg:block lg:w-[420px]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{s.card.title}</p>
          <ul className="mt-5 divide-y divide-neutral-200">
            {s.card.items.map((x) => (
              <li key={x} className="flex items-center gap-3 py-3 font-medium">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
        {SLIDES.map((sl, n) => (
          <button
            key={sl.title}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Slide ${n + 1}: ${sl.title}`}
            aria-current={n === i ? "true" : undefined}
            className="grid size-7 place-items-center"
          >
            <span className={`block size-3 rounded-full border-2 border-white transition ${n === i ? "bg-white" : "bg-transparent"}`} />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="ml-2 grid size-7 place-items-center rounded-full border-2 border-white/70 text-white hover:border-white"
        >
          {paused ? <Play className="size-3" /> : <Pause className="size-3" />}
        </button>
      </div>
    </section>
  );
}
