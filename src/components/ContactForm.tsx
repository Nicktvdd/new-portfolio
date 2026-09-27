"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";
type Field = "user_message" | "user_name" | "user_email";
type Errors = Partial<Record<Field, string>>;

const field =
  "w-full border-b-2 border-ink/70 bg-transparent py-1 outline-none transition-colors placeholder:text-muted/70 focus:border-accent aria-[invalid=true]:border-red-600";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("user_message") ?? "").trim()) errors.user_message = "Please add a message.";
  if (!String(data.get("user_name") ?? "").trim()) errors.user_name = "Please tell me your name.";
  const email = String(data.get("user_email") ?? "").trim();
  if (!email) errors.user_email = "Please add your email so I can reply.";
  else if (!EMAIL.test(email)) errors.user_email = "That email doesn't look quite right.";
  return errors;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm font-medium text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = form.current;
    if (!el) return;
    const data = new FormData(el);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      el.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot: real people never see or fill this field.
    if (String(data.get("company") ?? "")) {
      setStatus("success");
      el.reset();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS env vars are missing — message cannot be sent.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(serviceId, templateId, el, publicKey)
      .then(() => {
        setStatus("success");
        el.reset();
      })
      .catch(() => setStatus("error"));
  };

  const invalidProps = (name: Field) =>
    errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : { "aria-invalid": false };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      noValidate
      className="flex flex-col gap-7 rounded-3xl border border-line bg-card p-7 text-lg shadow-xl shadow-black/5 md:p-12"
    >
      <p className="font-display text-3xl italic">Dear Nick,</p>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_message" className="sr-only">
          Your message
        </label>
        <textarea
          id="user_message"
          name="user_message"
          required
          rows={5}
          placeholder="Tell me what you're building, and where I'd fit in…"
          className={`${field} resize-none`}
          {...invalidProps("user_message")}
        />
        <ErrorText id="user_message-error" message={errors.user_message} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_name">My name is</label>
        <input id="user_name" name="user_name" type="text" required autoComplete="name" className={field} {...invalidProps("user_name")} />
        <ErrorText id="user_name-error" message={errors.user_name} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_email">and you can reach me at</label>
        <input
          id="user_email"
          name="user_email"
          type="email"
          required
          autoComplete="email"
          className={field}
          {...invalidProps("user_email")}
        />
        <ErrorText id="user_email-error" message={errors.user_email} />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p aria-live="polite" className="text-base font-medium">
        {status === "success" && <span className="text-emerald-600">Thanks! Your message is on its way. 🦭</span>}
        {status === "error" && (
          <span className="text-red-600 dark:text-red-400">
            Something went wrong. Please email me directly at{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
