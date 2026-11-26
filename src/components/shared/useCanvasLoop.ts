"use client";

import { useEffect, useRef } from "react";

export type DrawFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;

/**
 * Runs a DPR-aware canvas animation that pauses when offscreen or the tab is hidden,
 * and draws a single static frame under prefers-reduced-motion.
 */
export function useCanvasLoop(draw: DrawFn) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);
  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    let w = 0;
    let h = 0;
    const t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) drawRef.current(ctx, w, h, 4);
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      drawRef.current(ctx, w, h, (now - t0) / 1000);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!reduce && !raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);
    const onVis = () => start();
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return ref;
}
