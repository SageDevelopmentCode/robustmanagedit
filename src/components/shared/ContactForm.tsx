"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { contact, helpOptions } from "@/content/site";

export type ContactFormClasses = {
  form?: string;
  label: string;
  input: string;
  button: string;
  hint?: string;
  success?: string;
};

/**
 * Static-site contact form. There is no backend yet, so submitting composes an
 * email to info@rjcomputers.com in the visitor's mail app.
 *
 * Any element with `data-help="<option>"` anywhere on the page pre-selects that
 * option when clicked (used by "Get the free guide", "Something's broken", etc.).
 */
export function ContactForm({ classes, submitLabel = "Send message" }: { classes: ContactFormClasses; submitLabel?: string }) {
  const id = useId();
  const [help, setHelp] = useState(helpOptions[0]);
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-help]");
      const value = el?.dataset.help;
      if (!value || !helpOptions.includes(value)) return;
      setHelp(value);
      setSent(false);
      window.setTimeout(() => {
        nameRef.current?.focus({ preventScroll: true });
        formRef.current?.classList.remove("flash");
        void formRef.current?.offsetWidth;
        formRef.current?.classList.add("flash");
      }, 450);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const who = get("company") || get("name");
    const subject = `Website inquiry: ${get("help")}${who ? ` (${who})` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "-"}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Interested in: ${get("help")}`,
      "",
      get("message"),
    ].join("\n");
    const link = document.createElement("a");
    link.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.click();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className={classes.success ?? classes.form}>
        <p className="text-lg font-semibold">Thanks! Your email app should open with your message ready to send.</p>
        <p className={`mt-2 ${classes.hint ?? ""}`}>
          If it didn&apos;t, email us at{" "}
          <a className="underline" href={contact.emailHref}>
            {contact.email}
          </a>{" "}
          or call{" "}
          <a className="underline" href={contact.phoneHref}>
            {contact.phone}
          </a>
          . For urgent issues, please call.
        </p>
        <button type="button" onClick={() => setSent(false)} className={`mt-5 ${classes.button}`}>
          Edit message
        </button>
      </div>
    );
  }

  const f = (name: string) => `${id}-${name}`;
  return (
    <form ref={formRef} onSubmit={onSubmit} className={`grid gap-4 sm:grid-cols-2 ${classes.form ?? ""}`} noValidate={false}>
      <div className="grid gap-1.5">
        <label htmlFor={f("name")} className={classes.label}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input ref={nameRef} id={f("name")} name="name" required autoComplete="name" className={classes.input} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={f("company")} className={classes.label}>
          Company or organization
        </label>
        <input id={f("company")} name="company" autoComplete="organization" className={classes.input} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={f("email")} className={classes.label}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input id={f("email")} name="email" type="email" required autoComplete="email" className={classes.input} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={f("phone")} className={classes.label}>
          Phone
        </label>
        <input id={f("phone")} name="phone" type="tel" autoComplete="tel" className={classes.input} />
      </div>
      <div className="grid gap-1.5 sm:col-span-2">
        <label htmlFor={f("help")} className={classes.label}>
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <select
          id={f("help")}
          name="help"
          required
          value={help}
          onChange={(e) => setHelp(e.target.value)}
          className={classes.input}
        >
          {helpOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-1.5 sm:col-span-2">
        <label htmlFor={f("message")} className={classes.label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea id={f("message")} name="message" required rows={4} className={classes.input} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className={classes.hint}>
          Urgent? Call{" "}
          <a href={contact.phoneHref} className="font-semibold underline underline-offset-2">
            {contact.phone}
          </a>
        </p>
        <button type="submit" className={classes.button}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
