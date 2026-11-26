"use client";

import { useState } from "react";
import { defenseLayers } from "@/content/site";

const CX = 400;
const CY = 410;
const RINGS: Record<number, [number, number]> = { 1: [104, 172], 2: [178, 246], 3: [252, 306], 4: [312, 386] };
const GAP = 0.012;

function pt(r: number, a: number) {
  return [CX + r * Math.cos(a), CY - r * Math.sin(a)] as const;
}

function sector(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = pt(r1, a0);
  const [x1, y1] = pt(r1, a1);
  const [x2, y2] = pt(r0, a1);
  const [x3, y3] = pt(r0, a0);
  return `M${x0} ${y0} A${r1} ${r1} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${r0} ${r0} 0 0 0 ${x3} ${y3}Z`;
}

function arc(r: number, a0: number, a1: number) {
  const [x0, y0] = pt(r, a0);
  const [x1, y1] = pt(r, a1);
  return `M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`;
}

const RING_LABEL: Record<number, string> = { 1: "Endpoint · Identity · Email", 2: "Network · Cloud · Backup", 3: "Detection", 4: "Assurance" };
const FILL: Record<number, string> = { 1: "#262626", 2: "#1b1b1b", 3: "#303030", 4: "#f2f2f2" };

export function DefenseRings() {
  const [active, setActive] = useState("monitoring");
  const layer = defenseLayers.find((l) => l.id === active)!;

  const segments = [1, 2, 3, 4].flatMap((ring) => {
    const list = defenseLayers.filter((l) => l.ring === ring);
    const span = Math.PI / list.length;
    return list.map((l, i) => {
      const a0 = Math.PI - i * span - (i === 0 ? 0 : GAP);
      const a1 = Math.PI - (i + 1) * span + (i === list.length - 1 ? 0 : GAP);
      return { ...l, a0, a1, r: RINGS[ring] };
    });
  });

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
      <svg viewBox="0 0 800 430" className="w-full" role="group" aria-label="Robust defense layers diagram">
        {segments.map((s) => {
          const on = s.id === active;
          const light = s.ring === 4;
          const mid = (s.r[0] + s.r[1]) / 2;
          const pathId = `ring-label-${s.id}`;
          return (
            <g
              key={s.id}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={`${s.name}: ${s.body}`}
              onMouseEnter={() => setActive(s.id)}
              onFocus={() => setActive(s.id)}
              onClick={() => setActive(s.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(s.id))}
              className="cursor-pointer outline-none [&:focus-visible>path:first-child]:stroke-white [&:focus-visible>path:first-child]:[stroke-width:3]"
            >
              <path d={sector(s.r[0], s.r[1], s.a0, s.a1)} fill={on ? "#eb0b45" : FILL[s.ring]} stroke="#0a0a0a" strokeWidth="2" className="transition-[fill] duration-300" />
              <path id={pathId} d={arc(mid - 6, s.a0, s.a1)} fill="none" />
              <text
                className="pointer-events-none select-none font-display uppercase"
                fontSize={s.ring === 3 ? 15 : 14}
                fontWeight={600}
                letterSpacing="1.5"
                fill={on ? "#fff" : light ? "#0a0a0a" : "#e5e5e5"}
              >
                <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                  {s.name}
                </textPath>
              </text>
            </g>
          );
        })}
        <path d={sector(0, 96, Math.PI, 0)} fill="#fff" />
        <text x={CX} y={CY - 38} textAnchor="middle" className="font-display" fontSize="13" fontWeight="600" letterSpacing="2" fill="#737373">
          YOUR
        </text>
        <text x={CX} y={CY - 16} textAnchor="middle" className="font-display" fontSize="21" fontWeight="700" fill="#0a0a0a">
          BUSINESS
        </text>
      </svg>

      <div aria-live="polite" className="border-l-2 border-brand pl-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{RING_LABEL[layer.ring]}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{layer.name}</h3>
        <p className="mt-4 text-lg leading-relaxed text-neutral-300">{layer.body}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {defenseLayers.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => setActive(l.id)}
                aria-pressed={l.id === active}
                className={`px-3 py-1.5 text-sm transition ${l.id === active ? "bg-white text-black" : "bg-white/5 text-neutral-300 hover:bg-white/10"}`}
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
