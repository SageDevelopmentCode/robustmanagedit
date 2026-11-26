"use client";

import { useCallback } from "react";
import { useCanvasLoop } from "@/components/shared/useCanvasLoop";

/** Halftone dotted surface: dot size follows a slowly moving 3D wave, seen in perspective. */
export function DotSurface({ className = "", tint = "255,255,255" }: { className?: string; tint?: string }) {
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cols = 110;
      const rows = 46;
      for (let r = 0; r < rows; r++) {
        const v = r / (rows - 1);
        const persp = 0.35 + v * 0.95;
        const y = h * (0.18 + Math.pow(v, 1.35) * 0.9);
        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1);
          const x = w * 0.5 + (u - 0.5) * w * 1.5 * persp;
          if (x < -4 || x > w + 4) continue;
          const wave =
            Math.sin(u * 9 + t * 0.5 + v * 3) * 0.5 +
            Math.cos(v * 7 - t * 0.35 + u * 2) * 0.5;
          const lift = (wave + 1) / 2;
          const yy = y - lift * 34 * persp;
          const rad = (0.4 + lift * 1.5) * persp;
          ctx.globalAlpha = 0.12 + lift * 0.55 * (0.4 + v * 0.6);
          ctx.fillStyle = `rgb(${tint})`;
          ctx.beginPath();
          ctx.arc(x, yy, rad, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    },
    [tint],
  );
  const ref = useCanvasLoop(draw);
  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
