"use client";

import { useState } from "react";
import { lifecycle } from "@/content/site";

const CX = 200;
const CY = 200;
const R0 = 92;
const R1 = 188;
const COLORS = ["#eb0b45", "#1f2937", "#4b5563", "#6b7280", "#374151"];

function pt(r: number, a: number) {
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
}
function sector(a0: number, a1: number) {
  const [x0, y0] = pt(R1, a0);
  const [x1, y1] = pt(R1, a1);
  const [x2, y2] = pt(R0, a1);
  const [x3, y3] = pt(R0, a0);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${x0} ${y0}A${R1} ${R1} 0 ${large} 1 ${x1} ${y1}L${x2} ${y2}A${R0} ${R0} 0 ${large} 0 ${x3} ${y3}Z`;
}

export function LifecycleWheel() {
  const [active, setActive] = useState(0);
  const n = lifecycle.length;
  const span = (Math.PI * 2) / n;
  const item = lifecycle[active];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[480px_1fr] lg:gap-20">
      <svg viewBox="0 0 400 400" className="mx-auto w-full max-w-[480px]" role="group" aria-label="Robust security lifecycle">
        {lifecycle.map((l, k) => {
          const a0 = -Math.PI / 2 - span / 2 + k * span + 0.012;
          const a1 = a0 + span - 0.024;
          const mid = (a0 + a1) / 2;
          const [tx, ty] = pt((R0 + R1) / 2, mid);
          const on = k === active;
          return (
            <g
              key={l.id}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={`${k + 1}. ${l.name}`}
              onClick={() => setActive(k)}
              onMouseEnter={() => setActive(k)}
              onFocus={() => setActive(k)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(k))}
              className="cursor-pointer outline-none [&:focus-visible>path]:stroke-brand [&:focus-visible>path]:[stroke-width:4]"
            >
              <path
                d={sector(a0, a1)}
                fill={on ? "#eb0b45" : COLORS[(k % (COLORS.length - 1)) + 1]}
                stroke="#fff"
                strokeWidth="3"
                className="transition-[fill] duration-300"
                style={{ transformOrigin: "200px 200px", transform: on ? "scale(1.03)" : "scale(1)", transition: "transform .3s, fill .3s" }}
              />
              <text x={tx} y={ty - 6} textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.65)" className="pointer-events-none font-display">
                0{k + 1}
              </text>
              <text x={tx} y={ty + 12} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff" className="pointer-events-none font-display">
                {l.name}
              </text>
            </g>
          );
        })}
        <circle cx={CX} cy={CY} r={R0 - 8} fill="#f3f4f6" />
        <text x={CX} y={CY - 8} textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="2" fill="#eb0b45" className="font-display">
          ROBUST
        </text>
        <text x={CX} y={CY + 14} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f2937" className="font-display">
          Lifecycle
        </text>
      </svg>
      <div aria-live="polite">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">Step {active + 1} of {n}</p>
        <h3 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#1f2937]">{item.name}</h3>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#4b5563]">{item.body}</p>
        <ol className="mt-10 flex flex-wrap gap-2">
          {lifecycle.map((l, k) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => setActive(k)}
                aria-pressed={k === active}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${k === active ? "bg-brand text-white" : "bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]"}`}
              >
                {k + 1}. {l.name}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
