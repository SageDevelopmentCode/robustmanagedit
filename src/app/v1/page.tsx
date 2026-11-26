import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { CountUp } from "@/components/shared/CountUp";
import { MegaHeader } from "@/components/shared/MegaHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { brand, contact, engagementModels, guide, industries, industryImages, news, process, stats, team } from "@/content/site";
import { DefenseRings } from "./_components/DefenseRings";
import { RibbonField } from "./_components/RibbonField";
import { StoryCarousel } from "./_components/StoryCarousel";

const RED = "#eb0b45";
const INDUSTRY_HELP: Record<string, string> = {
  manufacturing: "Cybersecurity & monitoring",
  nonprofit: "Managed IT / help desk",
  medical: "Compliance (HIPAA, DoD, etc.)",
  financial: "Cybersecurity & monitoring",
};

const btnRed = "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-brand px-6 font-semibold text-white transition hover:bg-brand-deep";

export default function V1() {
  return (
    <>
      <UtilityBar className="bg-black text-neutral-400" alertClassName="text-white hover:text-brand-coral" linkClassName="hover:text-white" />
      <MegaHeader
        theme={{
          accent: RED,
          bar: "bg-[#0a0a0a] text-white",
          barScrolled: "bg-[#0a0a0a] text-white border-b border-white/10",
          tone: "dark",
          link: "text-neutral-200 hover:text-white",
          linkActive: "text-white",
          panel: "bg-white text-black shadow-2xl",
          itemTitle: "text-black",
          itemBody: "text-neutral-600",
          itemHover: "hover:bg-neutral-100",
          promo: "bg-neutral-100 text-black",
          phone: "text-white hover:text-brand-coral",
          cta: "rounded-[4px] bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep",
          icon: "text-white",
          drawer: "bg-[#0a0a0a] text-white",
          drawerLink: "text-white",
          drawerMuted: "text-neutral-400",
          divider: "divide-white/10",
        }}
      />

      <main id="main">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#0a0a0a] text-white">
          <RibbonField className="absolute inset-0 -z-10 h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.7)_100%)] md:bg-[linear-gradient(90deg,#0a0a0a_0%,rgba(10,10,10,0.85)_35%,rgba(10,10,10,0)_75%)]" />
          <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-20 lg:px-10 lg:pt-28">
            <h1 className="max-w-4xl font-display text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl lg:text-[5.4rem]">
              We stop breaches before they stop your business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
              Managed security and IT for Southern California manufacturers, non-profits, medical practices and financial firms.
              Local engineers in {contact.city} since {brand.founded}.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" data-help="Free security assessment" className={`${btnRed} min-h-14 px-7 text-[17px]`}>
                Get a free security assessment <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a href={contact.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[4px] border border-white/30 px-7 text-[17px] font-semibold transition hover:border-white">
                <Phone className="size-5" aria-hidden="true" /> {contact.phone}
              </a>
            </div>

            <ul className="mt-24 grid border-t border-white/15 md:grid-cols-3">
              {news.slice(0, 3).map((n, i) => (
                <li key={n.title} className={`border-white/15 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}>
                  <a href={n.href} data-help={n.help} className={`group block py-6 ${i > 0 ? "md:px-8" : "md:pr-8"}`}>
                    <span className="text-sm font-semibold text-brand-coral">{n.kicker}</span>
                    <span className="mt-2 block text-[17px] font-semibold leading-snug text-white">
                      {n.title} <ArrowRight className="inline size-4 align-[-2px] transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DEFENSE RINGS */}
        <section id="services" className="bg-[#0a0a0a] pb-28 pt-8 text-white">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Every layer of your defense. One accountable team.</h2>
              <p className="mt-5 text-lg text-neutral-400">
                We secure and manage the whole stack, from the laptop on your front desk to the audit on your calendar. Select a layer to see what we do there.
              </p>
            </div>
            <div className="mt-16">
              <DefenseRings />
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODELS */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] text-black sm:text-5xl">Support that fits how you work</h2>
              <p className="mt-5 text-lg text-neutral-600">
                Call us when you need us, or let us run IT and security for you. Questions? Call{" "}
                <a href={contact.phoneHref} className="whitespace-nowrap font-semibold text-black underline underline-offset-4">
                  {contact.phone}
                </a>
                .
              </p>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {engagementModels.map((m) => (
                <article
                  key={m.id}
                  className={`flex flex-col rounded-[6px] border bg-white p-8 ${m.featured ? "border-brand border-t-[6px] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]" : "border-neutral-200"}`}
                >
                  <p className={`text-sm font-semibold ${m.featured ? "text-brand" : "text-neutral-500"}`}>{m.kicker}</p>
                  <h3 className="mt-2 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-black">{m.name}</h3>
                  <p className="mt-3 text-neutral-600">{m.summary}</p>
                  <div className="my-7 h-px bg-neutral-200" />
                  <ul className="space-y-3">
                    {m.includes.map((x) => (
                      <li key={x} className="flex gap-3 text-neutral-800">
                        <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <a
                      href="#contact"
                      data-help={m.help}
                      className={`w-full ${m.featured ? btnRed : "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-black px-6 font-semibold text-white hover:bg-neutral-800"}`}
                    >
                      Talk to us for pricing <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section aria-labelledby="stats-title" className="border-t border-neutral-200 bg-white pb-28 pt-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <h2 id="stats-title" className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.025em] text-black sm:text-5xl">
              Decades of keeping SoCal organizations running.
            </h2>
            <dl className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="border-t-2 border-black pt-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="flex items-baseline gap-2 font-display font-semibold tracking-[-0.04em] text-black">
                    {s.real ? (
                      <CountUp value={s.value} className="text-7xl sm:text-8xl" />
                    ) : (
                      <span className="rounded-[4px] border-2 border-dashed border-neutral-300 px-3 text-6xl text-neutral-300 sm:text-7xl">TBD</span>
                    )}
                    {s.suffix && <span className="text-3xl text-brand">{s.suffix}</span>}
                  </dd>
                  <dd className={`mt-4 max-w-xs ${s.real ? "text-neutral-700" : "font-mono text-sm text-neutral-400"}`}>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* STORIES */}
        <section id="results" aria-label="Client stories" className="bg-white pb-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <StoryCarousel />
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="bg-[#0a0a0a] py-28 text-white">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Built for organizations that can&apos;t afford downtime.</h2>
              <p className="max-w-md text-lg text-neutral-400">Each industry is attacked differently. We secure yours for the threats and regulations it actually faces.</p>
            </div>
            <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind) => {
                const img = industryImages[ind.id];
                return (
                  <li key={ind.id} className="bg-[#0a0a0a]">
                    <a href="#contact" data-help={INDUSTRY_HELP[ind.id]} className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden p-7">
                      <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="-z-10 object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/10" />
                      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-300">{ind.name}</span>
                      <span className="mt-3 text-2xl font-semibold leading-tight">{ind.headline}</span>
                      <span className="mt-5 h-[3px] w-10 bg-brand transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-white py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.025em] text-black sm:text-5xl">From first call to fully protected.</h2>
            <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {process.map((p, i) => (
                <li key={p.step} className={`border-t-2 pt-6 lg:pr-8 ${i === 0 ? "border-brand" : "border-neutral-200"}`}>
                  <span className={`font-display text-sm font-semibold ${i === 0 ? "text-brand" : "text-neutral-400"}`}>Step {i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-black">{p.step}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="border-t border-neutral-200 bg-[#f4f4f4] py-28">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[1fr_2fr] lg:px-10">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] text-black sm:text-5xl">Engineers you can call by name.</h2>
              <p className="mt-5 text-lg text-neutral-600">{brand.mission}</p>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {team.map((m) => (
                <li key={m.name} className="border-t border-neutral-300 py-6">
                  <p className="font-display text-xl font-semibold text-black">{m.name}</p>
                  <p className="text-sm font-semibold text-brand">{m.role}</p>
                  <p className="mt-2 text-neutral-600">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GUIDE BAND */}
        <section aria-labelledby="guide-title" className="bg-brand-gradient relative overflow-hidden text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/brand/robust-mark.png" alt="" aria-hidden="true" className="mark-white pointer-events-none absolute -right-16 top-1/2 h-[150%] w-auto -translate-y-1/2 opacity-[0.14]" />
          <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-10">
            <div>
              <p className="font-semibold text-white/85">Free guide</p>
              <h2 id="guide-title" className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                {guide.title}
              </h2>
            </div>
            <a href="#contact" data-help="Free guide: 16 Questions" className="inline-flex min-h-14 shrink-0 items-center gap-2 rounded-[4px] bg-white px-7 text-[17px] font-semibold text-brand transition hover:bg-neutral-100">
              Get my free copy <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#0a0a0a] py-28 text-white">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[1fr_1.3fr] lg:px-10">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Talk to a security engineer.</h2>
              <p className="mt-5 max-w-md text-lg text-neutral-400">
                Book a free assessment, ask a question or tell us what&apos;s broken. A real engineer in {contact.city} will get back to you.
              </p>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className="text-sm text-neutral-500">Call</dt>
                  <dd>
                    <a href={contact.phoneHref} className="font-display text-3xl font-semibold hover:text-brand-coral">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-500">Email</dt>
                  <dd>
                    <a href={contact.emailHref} className="text-lg hover:text-brand-coral">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-500">Office</dt>
                  <dd>
                    <a href={contact.mapHref} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-brand-coral">
                      {contact.street}, {contact.city}, {contact.region} {contact.postal}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-[6px] bg-[#161616] p-7 sm:p-10">
              <ContactForm
                submitLabel="Send to an engineer"
                classes={{
                  label: "text-sm font-medium text-neutral-300",
                  input:
                    "w-full rounded-[4px] border border-white/15 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-1 focus:ring-brand",
                  button: btnRed,
                  hint: "text-sm text-neutral-400",
                  form: "[--flash:rgba(235,11,69,0.5)]",
                  success: "text-neutral-200",
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        theme={{
          root: "bg-black text-white",
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
