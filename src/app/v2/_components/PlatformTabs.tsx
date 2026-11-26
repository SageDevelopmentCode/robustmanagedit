"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { images, lifecycle, pillars } from "@/content/site";

const TABS = [
  { id: "protect", label: "Protect", title: "Threat protection", body: pillars[0].promise + " Endpoint, email and identity security with continuous monitoring and SIEM watching every signal.", items: pillars[0].services.map((s) => s.name).concat(["Endpoint protection", "Email & phishing protection", "Security awareness training"]), image: images.cables, help: "Cybersecurity & monitoring" },
  { id: "manage", label: "Manage", title: "Managed IT", body: pillars[1].promise + " Help desk, proactive maintenance, Microsoft 365 and cloud, and backups that are tested, not assumed.", items: pillars[1].services.map((s) => s.name).concat(["Help desk, remote & onsite", "Network & VPN management", "Strategic IT planning"]), image: images.rack, help: "Managed IT / help desk" },
  { id: "comply", label: "Comply", title: "Compliance assurance", body: pillars[2].promise + " Risk assessments, audits, policies and technical controls, with the documentation to prove it.", items: ["HIPAA compliance", "Department of Defense requirements", "Risk assessments & audits", "Access controls & encryption", "Privacy & security policies", "Audit-ready documentation"], image: images.finance, help: "Compliance (HIPAA, DoD, etc.)" },
  { id: "respond", label: "Respond", title: "Incident response", body: lifecycle[3].body + " " + lifecycle[4].body, items: ["Incident response planning", "Ransomware containment", "Data recovery from verified backups", "Post-incident hardening", "Onsite response across LA & OC", "Business continuity planning"], image: images.networkTech, help: "Something's broken right now" },
];

export function PlatformTabs() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = TABS[i];

  function onKey(e: KeyboardEvent) {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + TABS.length) % TABS.length;
    setI(n);
    refs.current[n]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Services" onKeyDown={onKey} className="flex gap-2 overflow-x-auto border-b border-white/10 [scrollbar-width:none]">
        {TABS.map((t, n) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[n] = el;
            }}
            role="tab"
            id={`pt-tab-${t.id}`}
            aria-selected={n === i}
            aria-controls={`pt-panel-${t.id}`}
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            className={`relative whitespace-nowrap px-5 py-4 text-[15px] font-medium transition ${n === i ? "text-white" : "text-neutral-500 hover:text-neutral-200"}`}
          >
            <span className="mr-2 tabular-nums text-neutral-600">0{n + 1}</span>
            {t.label}
            <span aria-hidden="true" className={`absolute inset-x-0 -bottom-px h-0.5 bg-brand-coral transition-transform ${n === i ? "scale-x-100" : "scale-x-0"}`} />
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`pt-panel-${tab.id}`} aria-labelledby={`pt-tab-${tab.id}`} className="relative grid gap-12 pt-14 lg:grid-cols-[1.05fr_1fr]">
        <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-0 select-none text-[16rem] font-medium leading-none tracking-tighter text-white/[0.035] lg:right-[48%]">
          0{i + 1}
        </span>
        <div key={tab.id} className="relative animate-[fadeIn_.4s_ease-out]">
          <h3 className="text-3xl font-medium uppercase tracking-[0.22em] text-brand-coral sm:text-[2.6rem] sm:leading-tight">{tab.title}</h3>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">{tab.body}</p>
          <ul className="mt-8 grid max-w-xl gap-px bg-white/10 sm:grid-cols-2">
            {tab.items.map((x) => (
              <li key={x} className="bg-[#0b0b0b] px-4 py-3.5 text-[15px] text-neutral-200">
                {x}
              </li>
            ))}
          </ul>
          <a href="#contact" data-help={tab.help} className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 font-medium text-white transition hover:bg-brand-coral">
            Talk to a specialist <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div key={tab.image.src} className="relative min-h-[320px] animate-[fadeIn_.5s_ease-out] overflow-hidden rounded-xl lg:min-h-[480px]">
          <Image src={tab.image.src} alt={tab.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}
