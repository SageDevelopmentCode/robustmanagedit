import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { CountUp } from "@/components/shared/CountUp";
import { MegaHeader } from "@/components/shared/MegaHeader";
import { SectionNav } from "@/components/shared/SectionNav";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { brand, caseStudies, contact, images, stats, team } from "@/content/site";
import { IndustrySlider } from "./_components/IndustrySlider";
import { NewsCarousel } from "./_components/NewsCarousel";
import { ParticleWave } from "./_components/ParticleWave";
import { PlatformTabs } from "./_components/PlatformTabs";
import { ProofWall } from "./_components/ProofWall";

const RED = "#eb0b45";
const pill = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-medium text-white transition hover:bg-brand-coral";

export default function V2() {
  const bigStats = [stats[0], stats[4], stats[3]];
  return (
    <>
      <UtilityBar className="bg-[#111] text-neutral-400" alertClassName="text-white hover:text-brand-coral" linkClassName="hover:text-white" />
      <MegaHeader
        theme={{
          accent: RED,
          bar: "bg-black/40 text-white backdrop-blur-md",
          barScrolled: "bg-black text-white",
          tone: "dark",
          link: "text-neutral-200 hover:text-white",
          linkActive: "text-white",
          panel: "bg-[#141414] text-white border-t border-white/10 shadow-2xl",
          itemTitle: "text-white",
          itemBody: "text-neutral-400",
          itemHover: "hover:bg-white/5",
          promo: "bg-white/5 text-white",
          phone: "text-white hover:text-brand-coral",
          cta: "rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-coral",
          icon: "text-white",
          drawer: "bg-black text-white",
          drawerLink: "text-white",
          drawerMuted: "text-neutral-400",
          divider: "divide-white/10",
        }}
      />

      <main id="main">
        {/* HERO */}
        <section className="relative isolate -mt-16 flex min-h-[calc(100svh-36px)] flex-col overflow-hidden pt-16">
          <Image src={images.serverTech.src} alt="" fill priority sizes="100vw" className="-z-30 object-cover object-[65%_center]" />
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_34%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.5)_100%)]" />
          <ParticleWave className="absolute inset-0 -z-10 h-full w-full opacity-80 mix-blend-screen" />
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 py-20 lg:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-coral">Managed IT · Cybersecurity · Compliance</p>
            <h1 className="mt-6 max-w-4xl text-[3.2rem] font-medium leading-[1.0] tracking-[-0.04em] sm:text-7xl lg:text-[6.2rem]">
              Protected.
              <br />
              Productive.
              <br />
              Compliant.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-neutral-300">
              Managed IT and cybersecurity for Southern California, since {brand.founded}. One local team accountable for all of it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" data-help="Free security assessment" className={`${pill} min-h-14 px-8 text-[17px]`}>
                Get a free assessment <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a href="#results" className="inline-flex min-h-12 items-center gap-2 px-2 font-medium text-white underline decoration-white/40 underline-offset-8 hover:decoration-white">
                Read client stories
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-black/70 backdrop-blur-md">
            <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-10">
              <NewsCarousel />
            </div>
          </div>
        </section>

        <SectionNav
          items={[
            { label: "Why Robust", id: "why" },
            { label: "Services", id: "services" },
            { label: "Industries", id: "industries" },
            { label: "Results", id: "results" },
            { label: "Team", id: "team" },
            { label: "Contact", id: "contact" },
          ]}
          className="border-b border-white/10 bg-black/90 backdrop-blur-md"
          linkClassName="text-neutral-400 hover:text-white"
          activeClassName="text-white"
          cta={
            <a href="#contact" data-help="Free security assessment" className="inline-flex min-h-9 items-center rounded-full bg-brand px-4 text-sm font-medium text-white hover:bg-brand-coral">
              Free assessment
            </a>
          }
        />

        {/* WHY */}
        <section id="why" className="relative overflow-hidden py-32">
          <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-coral">Why Robust</p>
            <h2 className="mt-6 max-w-5xl text-4xl font-medium leading-[1.12] tracking-[-0.03em] sm:text-[3.4rem]">
              Attackers don&apos;t care how big you are. Small and mid-sized organizations get hit because they&apos;re easier.{" "}
              <span className="text-brand-coral">We give you enterprise-grade defense, with a local team that picks up the phone.</span>
            </h2>
            <div className="mt-20 grid gap-5 lg:grid-cols-3">
              {bigStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-[#0d0d0d] p-8">
                  <p className="flex items-baseline gap-2 text-7xl font-medium tracking-[-0.04em]">
                    {s.real ? <CountUp value={s.value} /> : <span className="text-neutral-600">TBD</span>}
                    <span className="text-2xl text-brand-coral">{s.suffix}</span>
                  </p>
                  <p className={`mt-6 text-lg ${s.real ? "text-neutral-300" : "font-mono text-sm text-neutral-500"}`}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-white/10 bg-[#0b0b0b] py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-[3.4rem]">One partner for your entire IT and security stack.</h2>
            <div className="mt-14">
              <PlatformTabs />
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="overflow-hidden py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-[3.4rem]">Secure whatever you do, wherever you do it.</h2>
              <p className="max-w-md text-lg text-neutral-400">Manufacturing floors, clinics, accounting firms and non-profits across LA and Orange County.</p>
            </div>
            <div className="mt-6">
              <IndustrySlider />
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="border-t border-white/10 py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-coral">Proven success</p>
            <div className="mt-10">
              <ProofWall />
            </div>
            <div className="mt-24 grid gap-5 lg:grid-cols-2">
              {caseStudies.map((c) => (
                <article key={c.client} className="flex flex-col rounded-xl border border-white/10 p-8 sm:p-10">
                  <p className="text-sm text-neutral-500">
                    {c.industry} · since {c.since}
                  </p>
                  <h3 className="mt-3 text-3xl font-medium tracking-tight">{c.client}</h3>
                  <p className="mt-2 text-lg text-neutral-300">{c.title}</p>
                  <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4">
                    {c.timeline.map((t) => (
                      <li key={t.year}>
                        <p className="font-medium text-brand-coral">{t.year}</p>
                        <p className="mt-1 text-sm leading-snug text-neutral-400">{t.event}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="relative isolate overflow-hidden border-t border-white/10 py-32">
          <Image src={images.skyline.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-black" />
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-[3.4rem]">
              Based in {contact.city}. Serving all of Southern California.
            </h2>
            <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {team.map((m) => (
                <li key={m.name} className="bg-black/80 p-6 backdrop-blur">
                  <p className="text-lg font-medium">{m.name}</p>
                  <p className="text-sm text-brand-coral">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="bg-brand-gradient relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/brand/robust-mark.png" alt="" aria-hidden="true" className="mark-white pointer-events-none absolute -right-16 top-1/2 h-[150%] w-auto -translate-y-1/2 opacity-[0.14]" />
            <div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-10">
              <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-6xl">Talk to a local engineer.</h2>
              <a href={contact.phoneHref} className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-8 text-xl font-medium text-black hover:bg-neutral-100">
                <Phone className="size-5" aria-hidden="true" /> {contact.phone}
              </a>
            </div>
          </div>
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-10">
            <div>
              <p className="text-2xl font-medium leading-snug tracking-tight">
                Prefer to write? Tell us what you need and we&apos;ll set up a free 30–60 minute consultation.
              </p>
              <p className="mt-6 text-neutral-400">
                <a href={contact.emailHref} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {contact.email}
                </a>
                <br />
                {contact.street}, {contact.city}, {contact.region} {contact.postal}
              </p>
            </div>
            <ContactForm
              submitLabel="Send message"
              classes={{
                label: "text-sm text-neutral-400",
                input:
                  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white outline-none transition focus:border-brand-coral focus:ring-0 [&>option]:text-black",
                button: pill,
                hint: "text-sm text-neutral-400",
                form: "[--flash:rgba(244,92,67,0.45)]",
                success: "text-neutral-200",
              }}
            />
          </div>
        </section>
      </main>

      <SiteFooter
        theme={{
          root: "border-t border-white/10 bg-black text-white",
          heading: "text-white",
          link: "text-neutral-400 hover:text-white",
          muted: "text-neutral-500",
          divider: "border-white/10",
          accent: RED,
          sub: "text-neutral-400",
        }}
      />
    </>
  );
}
