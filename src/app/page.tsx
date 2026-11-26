import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { OfficialLockup } from "@/components/shared/OfficialLockup";
import { images } from "@/content/site";

export const metadata = { title: "Homepage design directions" };

const directions = [
  {
    href: "/v1",
    tag: "V1",
    name: "Black & Signal",
    ref: "CrowdStrike design language",
    pitch: "Black canvas, one red, red light-ribbon hero, interactive Defense Rings diagram, bundle cards and huge stats.",
    img: images.cables,
  },
  {
    href: "/v2",
    tag: "V2",
    name: "Cinematic Precision",
    ref: "Palo Alto Networks design language",
    pitch: "Cinematic photography with a particle-wave overlay, sticky section nav, tabbed platform panels and a news carousel.",
    img: images.serverTech,
  },
  {
    href: "/v3",
    tag: "V3",
    name: "Enterprise Clear",
    ref: "Fortinet design language",
    pitch: "Bright enterprise layout: hero carousel, solution tiles, Security Lifecycle wheel and a 60-second Security Check.",
    img: images.engineer,
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#0a0a0a] px-5 py-14 text-white sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-6">
          <span className="rounded-md bg-white px-5 py-4">
            <OfficialLockup className="w-[240px] sm:w-[340px]" />
          </span>
          <span className="text-right text-sm text-neutral-400">Design review · round 3</span>
        </div>
        <h1 className="mt-16 max-w-3xl text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">Three homepage directions</h1>
        <p className="mt-5 max-w-2xl text-lg text-neutral-400">
          Same content, three enterprise security design languages. Open each one on desktop and on your phone, then pick the
          direction we build the rest of the site in.
        </p>
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {directions.map((d) => (
            <Link key={d.href} href={d.href} className="group flex flex-col bg-[#0a0a0a]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <span aria-hidden="true" className="bg-brand-gradient absolute inset-x-0 bottom-0 z-10 h-1" />
                <Image src={d.img.src} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm font-semibold text-brand-coral">
                  {d.tag} · {d.ref}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{d.name}</h2>
                <p className="mt-3 text-neutral-400">{d.pitch}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold">
                  Open {d.tag} <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
