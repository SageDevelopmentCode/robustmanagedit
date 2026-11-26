"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industries, industryImages } from "@/content/site";

export function IndustrySlider() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * Math.min(640, track.current.clientWidth * 0.8), behavior: "smooth" });
  return (
    <div>
      <div className="mb-8 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous industry" className="grid size-11 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
          <ArrowLeft className="size-5" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next industry" className="grid size-11 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
          <ArrowRight className="size-5" />
        </button>
      </div>
      <ul ref={track} className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:-mx-10 lg:px-10">
        {industries.map((ind) => {
          const img = industryImages[ind.id];
          return (
            <li key={ind.id} className="w-[86%] shrink-0 snap-start sm:w-[560px]">
              <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl p-8 sm:aspect-[5/6]">
                <Image src={img.src} alt={img.alt} fill sizes="560px" className="-z-10 object-cover transition duration-700 group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">{ind.name}</p>
                <h3 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-white">{ind.headline}</h3>
                <p className="mt-3 text-neutral-300">{ind.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {ind.controls.slice(0, 3).map((c) => (
                    <li key={c.title} className="rounded-full border border-white/25 px-3 py-1 text-xs text-white">
                      {c.title}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
