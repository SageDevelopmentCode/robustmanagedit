"use client";

import { useCallback } from "react";
import { useCanvasLoop } from "@/components/shared/useCanvasLoop";

/** A perspective field of red-tinted particles undulating like a wave surface. */
export function ParticleWave({ className = "" }: { className?: string }) {
  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.clearRect(0, 0, w, h);
    const cols = 90;
    const rows = 42;
    const fov = 420;
    const camY = -150;
    const horizon = h * 0.36;
    for (let r = 0; r < rows; r++) {
      const z = 60 + r * 22;
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * 20;
        const y =
          Math.sin(c * 0.16 + t * 0.7) * 26 +
          Math.cos(r * 0.22 + t * 0.5) * 22 +
          Math.sin((c + r) * 0.08 - t * 0.35) * 18;
        const s = fov / z;
        const px = w * 0.62 + x * s;
        const py = horizon + (y - camY) * s * 0.55;
        if (px < -10 || px > w + 10 || py < -10 || py > h + 10) continue;
        const depth = 1 - r / rows;
        const lift = (y + 66) / 132;
        const a = 0.12 + depth * 0.55 * (0.4 + lift * 0.6);
        // Logo gradient across the field: coral on the left → crimson on the right, brighter on crests.
        const g = c / cols;
        const R = Math.round(244 + (235 - 244) * g);
        const G = Math.round(92 + (11 - 92) * g + lift * 40);
        const B = Math.round(67 + (69 - 67) * g + lift * 20);
        ctx.fillStyle = `rgba(${R},${G},${B},${a})`;
        const size = Math.max(0.6, s * 1.5);
        ctx.fillRect(px, py, size, size);
      }
    }
  }, []);
  const ref = useCanvasLoop(draw);
  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
