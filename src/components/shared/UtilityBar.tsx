import { contact, utilityLinks } from "@/content/site";

/** Thin top bar with a breach hotline, in the style of enterprise security vendors. */
export function UtilityBar({ className = "", linkClassName = "", alertClassName = "" }: { className?: string; linkClassName?: string; alertClassName?: string }) {
  return (
    <div className={`text-[13px] ${className}`}>
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-10">
        <a href={contact.phoneHref} className={`truncate font-semibold ${alertClassName}`}>
          Experiencing a breach? <span className="underline underline-offset-2">Call {contact.phone} now</span>
        </a>
        <ul className="hidden items-center gap-5 sm:flex">
          {utilityLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={linkClassName}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
