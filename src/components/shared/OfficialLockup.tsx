import { brand } from "@/content/site";

/**
 * The official RJ Computer Networks / Robust Managed IT lockup (rj-lockup.webp, 2000×1210),
 * cropped to its artwork (x 215–1795, y 330–870) so it isn't shrunk by the file's padding.
 * Use on white surfaces only.
 */
export function OfficialLockup({ className = "w-[360px]" }: { className?: string }) {
  const cw = 1580;
  const ch = 540;
  return (
    <span className={`relative block overflow-hidden ${className}`} style={{ aspectRatio: `${cw} / ${ch}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/rj-lockup.webp"
        alt={`${brand.legalName} · ${brand.name} · ${brand.descriptor}`}
        className="absolute max-w-none"
        style={{ width: `${(2000 / cw) * 100}%`, left: `${(-215 / cw) * 100}%`, top: `${(-330 / ch) * 100}%` }}
      />
    </span>
  );
}
