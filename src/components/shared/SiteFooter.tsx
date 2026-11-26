import { OfficialLockup } from "@/components/shared/OfficialLockup";
import { Lockup } from "@/components/shared/Lockup";
import { allServices, brand, contact, industries, partners } from "@/content/site";

export type FooterTheme = { root: string; heading: string; link: string; muted: string; divider: string; accent?: string; sub?: string };

/** Enterprise-style multi-column footer. */
export function SiteFooter({ theme, officialLockup = false }: { theme: FooterTheme; officialLockup?: boolean }) {
  const year = new Date().getFullYear();
  const cols = [
    { h: "Services", items: allServices.map((s) => ({ label: s.name, href: "#services" })) },
    { h: "Industries", items: industries.map((i) => ({ label: i.name, href: "#industries" })) },
    {
      h: "Company",
      items: [
        { label: "About us", href: "#team" },
        { label: "Client stories", href: "#results" },
        { label: "How it works", href: "#process" },
        { label: "Careers", href: "#contact" },
      ],
    },
  ];
  return (
    <footer className={theme.root}>
      {officialLockup && (
        <div className="bg-white">
          <div className="mx-auto flex max-w-[1440px] justify-center px-5 py-10 lg:px-10">
            <OfficialLockup className="w-[300px] sm:w-[420px]" />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)_1.2fr]">
          <div>
            <Lockup tone="dark" />
            <p className={`mt-5 max-w-xs text-sm leading-relaxed ${theme.muted}`}>
              {brand.descriptor}. Managed IT, cybersecurity and compliance for Southern California organizations since {brand.founded}.
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <p className={`text-sm font-semibold ${theme.heading}`}>{c.h}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <a href={i.href} className={theme.link}>
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <p className={`text-sm font-semibold ${theme.heading}`}>Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={contact.phoneHref} className={theme.link}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className={theme.link}>
                  {contact.email}
                </a>
              </li>
              <li className={theme.muted}>
                {contact.street}
                <br />
                {contact.city}, {contact.region} {contact.postal}
              </li>
            </ul>
          </div>
        </div>
        <div className={`mt-14 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between ${theme.divider} ${theme.muted}`}>
          <p>
            © {year} {brand.legalName}. Serving {contact.serviceArea}.
          </p>
          <p>{partners.filter((p) => p.real).map((p) => p.name).join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
