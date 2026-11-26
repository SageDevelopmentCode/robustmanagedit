"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

type Answer = "yes" | "no" | "unsure";

const QUESTIONS = [
  { q: "Does everyone use multi-factor authentication (MFA) for email and remote access?", gap: "Turn on MFA everywhere. It stops most stolen-password account takeovers." },
  { q: "Are critical files backed up offsite, with a restore tested in the last 90 days?", gap: "Set up offsite, tested backups: your safety net against ransomware." },
  { q: "Do all computers and servers get security updates automatically within days?", gap: "Automate patching so known holes are closed before attackers use them." },
  { q: "Has your staff had phishing or security-awareness training this year?", gap: "Train your team. Most breaches start with one convincing email." },
  { q: "Is someone actively monitoring your network and devices for threats?", gap: "Add continuous monitoring so threats are caught in minutes, not months." },
  { q: "If ransomware hit tomorrow, would everyone know who to call and what to do?", gap: "Write a simple incident response plan and make sure your team knows it." },
];

const BANDS = [
  { min: 5, key: "Solid", color: "#15803d", msg: "Your basics look strong. A free assessment can verify it and check compliance and the details a checklist can't." },
  { min: 3, key: "At risk", color: "#b45309", msg: "Some fundamentals are in place, but the gaps below are exactly where small businesses get hit." },
  { min: 0, key: "Exposed", color: "#eb0b45", msg: "Several open doors attackers look for. The biggest gaps are often the quickest to close." },
];

export function SecurityCheck() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const step = answers.length;
  const done = step >= QUESTIONS.length;
  const score = answers.filter((a) => a === "yes").length;
  const band = BANDS.find((b) => score >= b.min)!;
  const gaps = QUESTIONS.filter((_, k) => answers[k] && answers[k] !== "yes");

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_10px_40px_-12px_rgba(17,24,39,0.25)]">
      <div className="flex items-center justify-between bg-[#1f2937] px-6 py-3.5 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.14em]">Security Check</p>
        <p className="text-sm text-neutral-300" aria-live="polite">
          {done ? "Results" : `${step + 1} / ${QUESTIONS.length}`}
        </p>
      </div>
      <div className="h-1 bg-[#e5e7eb]" aria-hidden="true">
        <div className="h-full bg-brand transition-all duration-500" style={{ width: `${(Math.min(step, 6) / 6) * 100}%` }} />
      </div>
      <div className="p-7 sm:p-9" aria-live="polite">
        {!done ? (
          <div key={step} className="animate-[fadeIn_.3s_ease-out]">
            <p id="sc3-q" className="min-h-[5.5rem] font-display text-2xl font-bold leading-snug text-[#1f2937]">
              {QUESTIONS[step].q}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3" role="group" aria-labelledby="sc3-q">
              {(
                [
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["unsure", "Not sure"],
                ] as const
              ).map(([v, label]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAnswers((a) => [...a, v])}
                  className={`min-h-13 rounded-md border-2 font-bold transition ${v === "yes" ? "border-brand bg-brand text-white hover:bg-brand-deep" : "border-[#d1d5db] text-[#1f2937] hover:border-[#1f2937]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-between text-sm text-[#6b7280]">
              {step > 0 ? (
                <button type="button" onClick={() => setAnswers((a) => a.slice(0, -1))} className="inline-flex items-center gap-1 hover:text-[#1f2937]">
                  <ArrowLeft className="size-4" aria-hidden="true" /> Back
                </button>
              ) : (
                <span>Anonymous. Nothing is stored.</span>
              )}
              <span>{QUESTIONS.length - step} left</span>
            </div>
          </div>
        ) : (
          <div className="animate-[fadeIn_.35s_ease-out]">
            <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: band.color }}>
              {band.key}
            </p>
            <p className="mt-2 font-display text-4xl font-bold text-[#1f2937]">
              {score} of {QUESTIONS.length}
            </p>
            <div className="mt-4 flex gap-1" aria-hidden="true">
              {QUESTIONS.map((_, k) => (
                <span key={k} className="h-2 flex-1 rounded-sm" style={{ background: k < score ? band.color : "#e5e7eb" }} />
              ))}
            </div>
            <p className="mt-5 text-[#4b5563]">{band.msg}</p>
            {gaps.length > 0 && (
              <ul className="mt-5 space-y-2 border-l-2 border-brand pl-4">
                {gaps.slice(0, 3).map((g) => (
                  <li key={g.q} className="text-sm text-[#1f2937]">
                    {g.gap}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" data-help="Free security assessment" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-brand px-5 font-bold text-white hover:bg-brand-deep">
                Book my free assessment <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <button type="button" onClick={() => setAnswers([])} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-[#d1d5db] px-5 font-bold text-[#1f2937] hover:border-[#1f2937]">
                <RotateCcw className="size-4" aria-hidden="true" /> Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
