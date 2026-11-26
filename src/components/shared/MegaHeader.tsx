"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Lockup } from "@/components/shared/Lockup";
import { contact, images, megaMenu } from "@/content/site";

export type MegaTheme = {
  tone: "light" | "dark";
  accent: string;
  bar: string;
  barScrolled: string;
  link: string;
  linkActive: string;
  panel: string;
  itemTitle: string;
  itemBody: string;
  itemHover: string;
  promo: string;
  phone: string;
  cta: string;
  icon: string;
  drawer: string;
  drawerLink: string;
  drawerMuted: string;
  divider: string;
};

type MenuKey = "services" | "industries";

const LINKS: ({ label: string; menu: MenuKey } | { label: string; href: string })[] = [
  { label: "Services", menu: "services" },
  { label: "Industries", menu: "industries" },
  { label: "How it works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Company", href: "#team" },
];

export function MegaHeader({ theme, ctaLabel = "Free assessment" }: { theme: MegaTheme; ctaLabel?: string }) {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const triggers = useRef<Record<MenuKey, HTMLButtonElement | null>>({ services: null, industries: null });
  const drawerRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) {
        triggers.current[open]?.focus();
        setOpen(null);
      }
      setDrawer(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    if (drawer) drawerRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [drawer]);

  const enter = (k: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  function trapTab(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !drawerRef.current) return;
    const f = [...drawerRef.current.querySelectorAll<HTMLElement>("a,button")];
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) {
      e.preventDefault();
      f[f.length - 1].focus();
    } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
      e.preventDefault();
      f[0].focus();
    }
  }

  const items = open ? megaMenu[open] : [];

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${scrolled || open || drawer ? theme.barScrolled : theme.bar}`} onMouseLeave={leave}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-10">
        <a href="#main" aria-label="Robust Managed IT, home" onMouseEnter={leave}>
          <Lockup tone={theme.tone} />
        </a>

        <nav aria-label="Primary" className="hidden h-full xl:block">
          <ul className="flex h-full items-stretch">
            {LINKS.map((l) =>
              "menu" in l ? (
                <li key={l.label} className="flex" onMouseEnter={() => enter(l.menu)}>
                  <button
                    ref={(el) => {
                      triggers.current[l.menu] = el;
                    }}
                    type="button"
                    aria-expanded={open === l.menu}
                    aria-controls={`${uid}-panel`}
                    onClick={() => setOpen((o) => (o === l.menu ? null : l.menu))}
                    className={`relative flex items-center gap-1 px-4 text-[15px] font-medium transition ${open === l.menu ? theme.linkActive : theme.link}`}
                  >
                    {l.label}
                    <ChevronDown className={`size-4 transition ${open === l.menu ? "rotate-180" : ""}`} aria-hidden="true" />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-[3px] origin-left transition-transform ${open === l.menu ? "scale-x-100" : "scale-x-0"}`}
                      style={{ background: theme.accent }}
                    />
                  </button>
                </li>
              ) : (
                <li key={l.label} className="flex" onMouseEnter={leave}>
                  <a href={l.href} className={`flex items-center px-4 text-[15px] font-medium transition ${theme.link}`}>
                    {l.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5" onMouseEnter={leave}>
          <a href={contact.phoneHref} className={`hidden items-center gap-2 whitespace-nowrap px-3 py-2 text-[15px] font-semibold sm:flex ${theme.phone}`}>
            <Phone className="size-4" aria-hidden="true" />
            {contact.phone}
          </a>
          <a href="#contact" data-help="Free security assessment" className={`hidden whitespace-nowrap md:inline-flex ${theme.cta}`}>
            {ctaLabel}
          </a>
          <a href={contact.phoneHref} className={`grid size-11 place-items-center sm:hidden ${theme.icon}`} aria-label={`Call ${contact.phone}`}>
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className={`grid size-11 place-items-center xl:hidden ${theme.icon}`}
            aria-expanded={drawer}
            aria-controls={`${uid}-drawer`}
            aria-label={drawer ? "Close menu" : "Open menu"}
            onClick={() => setDrawer((d) => !d)}
          >
            {drawer ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      <div
        id={`${uid}-panel`}
        hidden={!open}
        onMouseEnter={() => open && enter(open)}
        className={`absolute inset-x-0 top-full hidden xl:block ${theme.panel}`}
      >
        {open && (
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_340px] gap-10 px-10 py-9">
            <ul className={`grid gap-x-8 gap-y-1 ${open === "services" ? "grid-cols-2" : "grid-cols-2"}`}>
              {items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} onClick={() => setOpen(null)} className={`group block rounded-md px-4 py-3.5 transition ${theme.itemHover}`}>
                    <span className={`flex items-center gap-2 text-[15px] font-semibold ${theme.itemTitle}`}>
                      {it.label}
                      <ArrowRight className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                    </span>
                    <span className={`mt-1 block text-sm leading-snug ${theme.itemBody}`}>{it.body}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" data-help="Free security assessment" onClick={() => setOpen(null)} className={`group flex flex-col overflow-hidden rounded-md ${theme.promo}`}>
              <div className="relative h-40">
                <Image src={images.cables.src} alt="" fill sizes="340px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.accent }}>
                  Free · 30–60 minutes
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug">Cyber risk assessment and IT systems checkup</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Book yours <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {drawer && (
        <div
          id={`${uid}-drawer`}
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={trapTab}
          className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto px-5 pb-28 xl:hidden ${theme.drawer}`}
        >
          <ul className={`divide-y ${theme.divider}`}>
            {LINKS.map((l) => (
              <li key={l.label}>
                {"menu" in l ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={drawerGroup === l.menu}
                      onClick={() => setDrawerGroup((g) => (g === l.menu ? null : l.menu))}
                      className={`flex w-full items-center justify-between py-4 text-xl font-semibold ${theme.drawerLink}`}
                    >
                      {l.label}
                      <ChevronDown className={`size-5 transition ${drawerGroup === l.menu ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {drawerGroup === l.menu && (
                      <ul className="pb-4">
                        {megaMenu[l.menu].map((it) => (
                          <li key={it.label}>
                            <a href={it.href} onClick={() => setDrawer(false)} className={`block py-2.5 pl-3 ${theme.drawerMuted}`}>
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={l.href} onClick={() => setDrawer(false)} className={`block py-4 text-xl font-semibold ${theme.drawerLink}`}>
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href="#contact" data-help="Free security assessment" onClick={() => setDrawer(false)} className={`justify-center ${theme.cta} !flex !py-4`}>
              {ctaLabel}
            </a>
            <a href={contact.phoneHref} className={`flex items-center justify-center gap-2 py-3 font-semibold ${theme.drawerLink}`}>
              <Phone className="size-4" aria-hidden="true" /> {contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
