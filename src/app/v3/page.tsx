import Image from "next/image";
import { ArrowRight, BadgeCheck, FileCheck2, MapPin, Radar, ServerCog, ShieldCheck, Wrench } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { MegaHeader } from "@/components/shared/MegaHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { brand, clients, contact, images, news, stats, testimonials } from "@/content/site";
import { HeroCarousel } from "./_components/HeroCarousel";
import { LifecycleWheel } from "./_components/LifecycleWheel";
import { SecurityCheck } from "./_components/SecurityCheck";

const RED = "#eb0b45";

function Head({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">{kicker}</p>
      <h2 className="mt-3 font-display text-[2.1rem] font-bold leading-tight tracking-[-0.015em] text-[#1f2937] sm:text-[2.75rem]">{title}</h2>
      {sub && <p className="mt-4 text-lg text-[#4b5563]">{sub}</p>}
    </div>
  );
}

function ReadMore({ label = "Read more" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-brand">
      {label}
      <span className="grid size-6 place-items-center rounded-full border-2 border-current transition group-hover:bg-brand group-hover:text-white">
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </span>
    </span>
  );
}

const TILES = [
  { title: "Managed IT", body: "Help desk, proactive maintenance, Microsoft 365, cloud and tested backups for one monthly price.", bg: "bg-brand", Icon: ServerCog, help: "Managed IT / help desk" },
  { title: "Cybersecurity", body: "Endpoint, email and network protection with continuous monitoring and SIEM.", bg: "bg-[#1f2937]", Icon: ShieldCheck, help: "Cybersecurity & monitoring" },
  { title: "Compliance", body: "Risk assessments, audits and controls for HIPAA, DoD requirements and more.", bg: "bg-brand-gradient", Icon: FileCheck2, help: "Compliance (HIPAA, DoD, etc.)" },
];

const BUILT = [
  { label: "Local engineers", bar: "bg-brand", Icon: MapPin, title: `Based in ${contact.city}`, body: "Technicians a phone call away, onsite across Greater LA, Orange County and parts of San Bernardino." },
  { label: "Microsoft certified", bar: "bg-[#111827]", Icon: BadgeCheck, title: "Microsoft Certified Partner", body: "Setup, security and support for Microsoft 365, Windows and Windows Server environments." },
  { label: "Proactive", bar: "bg-[#1f2937]", Icon: Radar, title: "Continuous monitoring", body: "We watch systems and security events so problems are fixed before they become downtime." },
  { label: "Compliance", bar: "bg-[#4b5563]", Icon: Wrench, title: "Audit-ready controls", body: "Policies, access controls, encryption and documentation for HIPAA, DoD and industry rules." },
];

const STORIES = [
  { org: "Mitchell Laboratories", industry: "Manufacturing", headline: "Department of Defense requirements met with strategic IT upgrades", bg: "bg-[#1f2937]" },
  { org: "Spiritt", industry: "Non-profit", headline: "HIPAA compliance and secure remote work for a social-services agency", bg: "bg-brand" },
  { org: "HiTech Products", industry: "Manufacturing", headline: testimonials.find((t) => t.org === "HiTech Products")!.quote, bg: "bg-[#4b5563]" },
  { org: "Slome Capital, Inc.", industry: "Financial", headline: testimonials.find((t) => t.org === "Slome Capital, Inc.")!.quote, bg: "bg-[#111827]" },
];

const SEGMENTS = [
  { title: "Small & mid-sized business", body: "A full IT department and security team for one predictable price.", img: images.meeting, help: "Managed IT / help desk" },
  { title: "Non-profits & churches", body: "Protect donor data and stretch your budget, with no in-house IT required.", img: images.nonprofit, help: "Managed IT / help desk" },
  { title: "Regulated industries", body: "Medical, financial and DoD suppliers: security that holds up to an audit.", img: images.medical, help: "Compliance (HIPAA, DoD, etc.)" },
];

export default function V3() {
  return (
    <>
      <UtilityBar className="border-b border-[#e5e7eb] bg-[#f9fafb] text-[#4b5563]" alertClassName="text-brand" linkClassName="hover:text-[#111827]" />
      <MegaHeader
        theme={{
          accent: RED,
          bar: "bg-white text-[#111827] border-b border-[#e5e7eb]",
          barScrolled: "bg-white text-[#111827] border-b border-[#e5e7eb] shadow-sm",
          tone: "light",
          link: "text-[#1f2937] hover:text-brand",
          linkActive: "text-brand",
          panel: "bg-white text-[#111827] border-t border-[#e5e7eb] shadow-xl",
          itemTitle: "text-[#111827]",
          itemBody: "text-[#6b7280]",
          itemHover: "hover:bg-[#f3f4f6]",
          promo: "bg-[#f3f4f6] text-[#111827]",
          phone: "text-[#111827] hover:text-brand",
          cta: "rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep",
          icon: "text-[#111827]",
          drawer: "bg-white text-[#111827]",
          drawerLink: "text-[#111827]",
          drawerMuted: "text-[#4b5563]",
          divider: "divide-[#e5e7eb]",
        }}
      />

      <main id="main">
        <HeroCarousel />

        {/* LATEST */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="News" title="Latest from Robust" />
            <ul className="mt-14 grid gap-7 md:grid-cols-3">
              {news.slice(0, 3).map((n) => (
                <li key={n.title}>
                  <a href={n.href} data-help={n.help} className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_6px_24px_-8px_rgba(17,24,39,0.22)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(17,24,39,0.3)]">
                    <span className="relative aspect-[16/9] overflow-hidden">
                      <Image src={n.image.src} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    </span>
                    <span className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b7280]">{n.kicker}</span>
                      <span className="mt-2 font-display text-xl font-bold leading-snug text-[#111827]">{n.title}</span>
                      <span className="mt-auto pt-6">
                        <ReadMore label={n.cta} />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOLUTION TILES */}
        <section id="services" className="bg-[#f3f4f6] py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="Integrated services" title="IT, security and compliance from one accountable team" />
            <ul className="mt-14 grid gap-7 md:grid-cols-3">
              {TILES.map(({ title, body, bg, Icon, help }) => (
                <li key={title}>
                  <a href="#contact" data-help={help} className="group block">
                    <span className={`relative flex aspect-[5/3] items-center justify-center overflow-hidden rounded-lg ${bg} text-white shadow-lg transition group-hover:-translate-y-1`}>
                      <Icon aria-hidden="true" strokeWidth={1} className="absolute -right-8 -top-8 size-64 opacity-15 transition duration-700 group-hover:rotate-6" />
                      <Icon aria-hidden="true" strokeWidth={1} className="absolute -bottom-12 -left-10 size-48 opacity-10" />
                      <span className="relative font-display text-3xl font-bold">{title}</span>
                    </span>
                    <span className="mt-5 block text-[#4b5563]">{body}</span>
                    <span className="mt-4 block">
                      <ReadMore label="Talk to us" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LIFECYCLE */}
        <section id="process" className="bg-white py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="The Robust Security Lifecycle" title="Assess, protect, monitor, respond, recover. Continuously." />
            <div className="mt-16">
              <LifecycleWheel />
            </div>
          </div>
        </section>

        {/* HOW WE'RE BUILT */}
        <section className="bg-[#f3f4f6] py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="Why Robust" title="Built for dependable, accountable protection" sub={`Serving Southern California organizations since ${brand.founded}.`} />
            <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {BUILT.map(({ label, bar, Icon, title, body }) => (
                <li key={label} className="overflow-hidden rounded-lg bg-white text-center shadow-[0_6px_24px_-8px_rgba(17,24,39,0.18)]">
                  <p className={`${bar} py-3 text-sm font-bold uppercase tracking-[0.12em] text-white`}>{label}</p>
                  <div className="p-7">
                    <Icon aria-hidden="true" strokeWidth={1.25} className="mx-auto size-14 text-[#1f2937]" />
                    <p className="mt-5 font-display text-lg font-bold text-[#111827]">{title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#4b5563]">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECURITY CHECK */}
        <section aria-labelledby="check-title" className="bg-white py-24">
          <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">60-second Security Check</p>
              <h2 id="check-title" className="mt-3 font-display text-[2.1rem] font-bold leading-tight tracking-[-0.015em] text-[#1f2937] sm:text-[2.75rem]">
                How exposed is your business right now?
              </h2>
              <p className="mt-5 max-w-lg text-lg text-[#4b5563]">
                Six yes-or-no questions based on the controls that stop the most common attacks on small and mid-sized organizations. Get your score and your top gaps instantly.
              </p>
            </div>
            <SecurityCheck />
          </div>
        </section>

        {/* STORIES */}
        <section id="results" className="bg-[#f3f4f6] py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="Customer stories" title="Southern California organizations trust Robust" />
            <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {STORIES.map((s) => (
                <li key={s.org} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_6px_24px_-8px_rgba(17,24,39,0.18)]">
                  <div className={`${s.bg} flex aspect-[16/9] flex-col justify-end p-5 text-white`}>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">{s.industry}</span>
                    <span className="mt-1 font-display text-2xl font-bold leading-tight">{s.org}</span>
                  </div>
                  <p className="flex-1 p-6 font-display text-[17px] font-semibold leading-snug text-[#111827]">{s.headline}</p>
                </li>
              ))}
            </ul>
            <div className="mt-16 border-t border-[#d1d5db] pt-10">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {clients.map((c) => (
                  <li key={c} className="font-display text-lg font-bold text-[#9ca3af]">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-lg bg-[#d1d5db] sm:grid-cols-3">
              {[stats[0], stats[1], stats[3]].map((s) => (
                <div key={s.label} className="flex flex-col-reverse bg-white p-8 text-center">
                  <dt className={`mt-2 text-sm ${s.real ? "text-[#4b5563]" : "font-mono text-[#9ca3af]"}`}>{s.label}</dt>
                  <dd className="font-display text-5xl font-extrabold tracking-tight text-[#111827]">
                    {s.real ? s.value : <span className="text-[#d1d5db]">TBD</span>}
                    <span className="ml-1 text-2xl text-brand">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SEGMENTS */}
        <section id="industries" className="bg-white py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="Solutions for" title="Find the right protection for your organization" />
            <ul className="mt-14 grid gap-7 md:grid-cols-3">
              {SEGMENTS.map((s) => (
                <li key={s.title}>
                  <a href="#contact" data-help={s.help} className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-lg p-7 text-white">
                    <Image src={s.img.src} alt={s.img.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="-z-10 object-cover transition duration-700 group-hover:scale-105" />
                    <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
                    <span className="font-display text-2xl font-bold">{s.title}</span>
                    <span className="mt-2 text-white/85">{s.body}</span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      Explore <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#f3f4f6] py-24">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <Head kicker="Contact us" title="Talk to a Robust specialist" sub="Book a free assessment, ask about compliance, or get help with something that's broken." />
            <div className="mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-lg bg-white shadow-[0_10px_40px_-12px_rgba(17,24,39,0.25)] lg:grid-cols-[1.5fr_1fr]">
              <div className="p-7 sm:p-10">
                <ContactForm
                  submitLabel="Submit"
                  classes={{
                    label: "text-sm font-semibold text-[#1f2937]",
                    input:
                      "w-full rounded-md border border-[#d1d5db] bg-white px-4 py-3 text-[#111827] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20",
                    button: "inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-8 font-bold uppercase tracking-wider text-white hover:bg-brand-deep",
                    hint: "text-sm text-[#6b7280]",
                    form: "[--flash:rgba(235,11,69,0.35)]",
                    success: "text-[#1f2937]",
                  }}
                />
              </div>
              <div className="bg-[#1f2937] p-7 text-white sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-coral">Need help now?</p>
                <a href={contact.phoneHref} className="mt-3 block font-display text-3xl font-bold hover:text-brand-coral">
                  {contact.phone}
                </a>
                <a href={contact.emailHref} className="mt-2 block text-neutral-300 hover:text-white">
                  {contact.email}
                </a>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-neutral-400">Office</p>
                <a href={contact.mapHref} target="_blank" rel="noopener noreferrer" className="mt-2 block text-neutral-200 hover:text-white">
                  {contact.street}
                  <br />
                  {contact.city}, {contact.region} {contact.postal}
                </a>
                <p className="mt-8 text-sm text-neutral-400">Serving {contact.serviceArea}.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        officialLockup
        theme={{
          root: "bg-[#111827] text-white",
          heading: "text-white",
          link: "text-neutral-400 hover:text-white",
          muted: "text-neutral-500",
          divider: "border-white/10",
          accent: "#f45c43",
          sub: "text-neutral-400",
        }}
      />
    </>
  );
}
