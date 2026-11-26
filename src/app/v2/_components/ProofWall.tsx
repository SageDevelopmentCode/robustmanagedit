"use client";

import { useState } from "react";
import { testimonials } from "@/content/site";

/** One large quote at a time; the client names below act as selectors. */
export function ProofWall() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <div>
      <figure key={i} className="min-h-[300px] animate-[fadeIn_.4s_ease-out] sm:min-h-[260px]" aria-live="polite">
        <blockquote className="max-w-5xl text-[1.9rem] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-5xl sm:leading-[1.12]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8 text-lg text-neutral-400">
          {t.name ? `${t.name}${t.role ? `, ${t.role}` : ""} · ` : ""}
          <span className="text-white">{t.org}</span>
        </figcaption>
      </figure>
      <ul className="mt-14 grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-7" aria-label="Choose a client">
        {testimonials.map((x, n) => (
          <li key={x.org} className="bg-black">
            <button
              type="button"
              aria-pressed={n === i}
              onClick={() => setI(n)}
              className={`relative h-full w-full px-4 py-6 text-left text-[15px] font-medium leading-tight transition ${n === i ? "text-white" : "text-neutral-500 hover:text-neutral-200"}`}
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 bg-brand-coral transition-transform ${n === i ? "scale-x-100" : "scale-x-0"}`} />
              {x.org}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
