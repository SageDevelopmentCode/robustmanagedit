"use client";

import { useEffect, useState } from "react";

/** Sticky in-page sub-navigation that highlights the section in view. */
export function SectionNav({
  items,
  className = "",
  linkClassName = "",
  activeClassName = "",
  cta,
}: {
  items: { label: string; id: string }[];
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  cta?: React.ReactNode;
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className={`sticky top-16 z-40 ${className}`}>
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-10">
        <ul className="-mx-2 flex items-center gap-1 overflow-x-auto [scrollbar-width:none]">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "true" : undefined}
                className={`block whitespace-nowrap px-3 py-2 text-sm font-medium transition ${active === i.id ? activeClassName : linkClassName}`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        {cta && <div className="hidden shrink-0 md:block">{cta}</div>}
      </div>
    </nav>
  );
}
