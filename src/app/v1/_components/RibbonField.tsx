"use client";

import { useCallback } from "react";
import { useCanvasLoop } from "@/components/shared/useCanvasLoop";

type Pt = [number, number];

/** Cubic Bézier point. */
function bez(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const u = 1 - t;
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ];
}

/**
 * The Robust swoosh in motion: a bold stroke that rises from the lower left, peaks at the
 * upper right and hooks back down — echoing the logo mark — with parallel speed lines and
 * light pulses travelling along them. Logo gradient: coral (#f45c43) → crimson (#eb0b45).
 */
export function RibbonField({ className = "" }: { className?: string }) {
  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.clearRect(0, 0, w, h);
    const mobile = w < 768;
    // Normalised → pixels. On mobile the swoosh sits further right and lower so text stays clear.
    const ox = mobile ? 0.1 : 0;
    const P = (x: number, y: number): Pt => [(x + ox) * w, y * h];
    const breathe = Math.sin(t * 0.6) * 0.012;

    // Rising arc of the swoosh (bottom-left → peak).
    const A0 = P(0.3, 1.05);
    const A1 = P(0.52, 0.62 + breathe);
    const A2 = P(0.72, 0.14);
    const A3 = P(0.92, 0.12 - breathe);
    // Hook (peak → down → kick right).
    const B1 = P(1.01, 0.1);
    const B2 = P(0.86, 0.46);
    const B3 = P(0.81, 0.64);
    const C1 = P(0.77, 0.8);
    const C2 = P(0.92, 0.82 + breathe);
    const C3 = P(1.08, 0.74);

    const grad = ctx.createLinearGradient(A0[0], A0[1], A3[0], A3[1]);
    grad.addColorStop(0, "#f45c43");
    grad.addColorStop(0.55, "#ee3045");
    grad.addColorStop(1, "#eb0b45");

    // Speed lines: parallel to the rising arc, offset down-right, stopping short of the peak.
    // Like the mark: three thin lines tucked under the main stroke, ending well before the peak.
    const lines = 3;
    for (let k = 1; k <= lines; k++) {
      const dx = k * 0.016 * w;
      const dy = k * 0.03 * h;
      const start = 0.02 + k * 0.03;
      const end = 0.72 - k * 0.07;
      const pts: Pt[] = [];
      for (let s = 0; s <= 60; s++) {
        const [x, y] = bez(A0, A1, A2, A3, start + (s / 60) * (end - start));
        pts.push([x + dx, y + dy]);
      }
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.strokeStyle = grad;
      ctx.globalAlpha = 0.95;
      ctx.lineWidth = Math.min(w, h) * (mobile ? 0.006 : 0.008);
      ctx.lineCap = "round";
      ctx.stroke();

      // Travelling light pulse.
      const len = pts.length;
      const head = Math.floor((((t * 0.22 + k * 0.137) % 1) + 1) % 1 * (len + 14));
      ctx.beginPath();
      for (let s = Math.max(0, head - 14); s < Math.min(len, head); s++) {
        const [x, y] = pts[s];
        if (s === Math.max(0, head - 14)) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.globalAlpha = 0.85;
      ctx.strokeStyle = "#ffd9d2";
      ctx.lineWidth = Math.min(w, h) * (mobile ? 0.006 : 0.008);
      ctx.stroke();
    }

    // Main swoosh stroke with the hook, drawn in tapered passes for a brush-like body.
    const main: Pt[] = [];
    for (let s = 0; s <= 80; s++) main.push(bez(A0, A1, A2, A3, s / 80));
    for (let s = 1; s <= 50; s++) main.push(bez(A3, B1, B2, B3, s / 50));
    for (let s = 1; s <= 40; s++) main.push(bez(B3, C1, C2, C3, s / 40));
    const base = Math.min(w, h) * (mobile ? 0.03 : 0.04);
    // Soft glow pass along the whole path, then the tapered body on top.
    ctx.beginPath();
    main.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.globalAlpha = 0.35;
    ctx.shadowColor = "rgba(235,11,69,0.9)";
    ctx.shadowBlur = 48;
    ctx.strokeStyle = grad;
    ctx.lineWidth = base * 0.6;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
    for (let i = 1; i < main.length; i++) {
      const u = i / main.length;
      // Thin at the tail, full through the arc and turn, thinning again on the kick.
      const taper = Math.min(1, u * 5) * (u > 0.82 ? Math.max(0.25, 1 - (u - 0.82) * 4) : 1);
      ctx.beginPath();
      ctx.moveTo(main[i - 1][0], main[i - 1][1]);
      ctx.lineTo(main[i][0], main[i][1]);
      ctx.strokeStyle = grad;
      ctx.lineWidth = base * (0.25 + 0.75 * taper);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }, []);
  const ref = useCanvasLoop(draw);
  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
