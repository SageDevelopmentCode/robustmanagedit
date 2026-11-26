"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const versions = [
  { href: "/v1", label: "V1", name: "Command Center" },
  { href: "/v2", label: "V2", name: "Trusted Neighbor" },
  { href: "/v3", label: "V3", name: "Guided Clarity" },
];

/** Temporary design-review helper. Remove once a direction is chosen. */
export function VersionSwitcher() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Design versions"
      className="fixed bottom-4 left-4 z-[60] hidden items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 text-xs font-semibold text-neutral-700 shadow-lg backdrop-blur md:flex"
    >
      <Link href="/" className="rounded-full px-3 py-1.5 hover:bg-neutral-100" title="All versions">
        All
      </Link>
      {versions.map((v) => {
        const active = pathname?.startsWith(v.href);
        return (
          <Link
            key={v.href}
            href={v.href}
            title={v.name}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 ${active ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"}`}
          >
            {v.label}
          </Link>
        );
      })}
    </nav>
  );
}
