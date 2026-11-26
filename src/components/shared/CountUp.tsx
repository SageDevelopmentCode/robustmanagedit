"use client";

import { useEffect, useRef, useState } from "react";

/** Counts a numeric value up once when scrolled into view. Non-numeric values render as-is. */
export function CountUp({ value, duration = 1400, className }: { value: string; duration?: number; className?: string }) {
  const target = Number(value.replace(/,/g, ""));
  const numeric = value.trim() !== "" && Number.isFinite(target);
  const [shown, setShown] = useState(numeric ? "0" : value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numeric || !ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setShown(target.toLocaleString("en-US"));
          return;
        }
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(target * eased).toLocaleString("en-US"));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numeric, target, duration]);

  return (
    <span ref={ref} className={className}>
      {numeric ? shown : value}
    </span>
  );
}
