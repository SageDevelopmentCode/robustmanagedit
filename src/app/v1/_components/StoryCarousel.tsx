"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images, testimonials } from "@/content/site";

const STORIES = [
  { t: testimonials.find((x) => x.org === "Mitchell Laboratories")!, tag: "Manufacturing · client since 2002" },
  { t: testimonials.find((x) => x.org === "Spiritt")!, tag: "Non-profit · client since 2006" },
  { t: testimonials.find((x) => x.org === "American Baptist Churches")!, tag: "Non-profit · client for 30+ years" },
  { t: testimonials.find((x) => x.org === "HiTech Products")!, tag: "Manufacturing" },
];

export function StoryCarousel() {
  const [i, setI] = useState(0);
  const s = STORIES[i];
  const go = (d: number) => setI((v) => (v + d + STORIES.length) % STORIES.length);

  return (
    <div className="grid overflow-hidden bg-[#f4f4f4] lg:grid-cols-2">
      <div className="relative min-h-[320px] lg:min-h-[560px]">
        <Image src={images.networkTech.src} alt={images.networkTech.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-between p-8 sm:p-14">
        <div aria-live="polite">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{s.tag}</p>
          <blockquote key={i} className="mt-6 animate-[fadeIn_.35s_ease-out] text-[1.7rem] font-semibold leading-[1.25] tracking-tight text-black sm:text-[2.1rem]">
            &ldquo;{s.t.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-black">
            {s.t.name && <span className="font-semibold">{s.t.name}{s.t.role ? `, ${s.t.role}` : ""} · </span>}
            <span className={s.t.name ? "text-neutral-600" : "font-semibold"}>{s.t.org}</span>
          </p>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous story" className="grid size-12 place-items-center border border-black/20 text-black transition hover:bg-black hover:text-white">
            <ArrowLeft className="size-5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next story" className="grid size-12 place-items-center border border-black/20 text-black transition hover:bg-black hover:text-white">
            <ArrowRight className="size-5" />
          </button>
          <p className="ml-3 font-medium tabular-nums text-neutral-500">
            {String(i + 1).padStart(2, "0")} / {String(STORIES.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}
