"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { news } from "@/content/site";

/** "Recommended" strip with thumbnails, scrollable with arrow buttons. */
export function NewsCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * track.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div className="flex items-center gap-6">
      <p className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 lg:block">Recommended</p>
      <ul ref={track} className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none]">
        {news.map((n) => (
          <li key={n.title} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(25%-18px)]">
            <a href={n.href} data-help={n.help} className="group flex items-center gap-4">
              <span className="relative size-16 shrink-0 overflow-hidden rounded-md">
                <Image src={n.image.src} alt="" fill sizes="64px" className="object-cover transition group-hover:scale-110" />
              </span>
              <span>
                <span className="line-clamp-2 text-sm font-medium leading-snug text-white">{n.title}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-coral">
                  {n.cta} <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden shrink-0 gap-2 sm:flex">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous" className="grid size-9 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
          <ArrowLeft className="size-4" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next" className="grid size-9 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
