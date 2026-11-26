import Image from "next/image";
import { brand } from "@/content/site";

type Tone = "light" | "dark" | "onBrand";

/**
 * Brand lockup: the swoosh mark, "Robust Managed IT", and "RJ Computer Networks, Inc." beneath.
 * `tone` = background it sits on: light (white/grey), dark (black), onBrand (brand red, mark turns white).
 */
export function Lockup({ tone = "light", showSub = true, size = "md", className = "" }: { tone?: Tone; showSub?: boolean; size?: "md" | "lg"; className?: string }) {
  const name = tone === "light" ? "text-[#111827]" : "text-white";
  const sub = tone === "light" ? "text-[#6b7280]" : tone === "dark" ? "text-neutral-400" : "text-white/80";
  const mark = size === "lg" ? 44 : 34;
  return (
    <span className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap ${className}`}>
      <Image
        src="/brand/robust-mark.png"
        alt=""
        width={mark}
        height={mark}
        priority
        className={`shrink-0 ${tone === "onBrand" ? "mark-white" : ""}`}
        style={{ width: mark, height: mark }}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-[-0.015em] ${size === "lg" ? "text-[1.45rem]" : "text-[1.12rem]"} ${name}`}>{brand.name}</span>
        {showSub && <span className={`mt-1 text-[0.66rem] font-medium tracking-[0.02em] ${sub}`}>{brand.legalName}</span>}
      </span>
    </span>
  );
}
