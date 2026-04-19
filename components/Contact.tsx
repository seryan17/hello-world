"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/<FORMSPREE_FORM_ID>";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-2">Let&apos;s build something great</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Tell us a little about your project and we&apos;ll get back to you
            within one business day with next steps.
          </p>

          <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
            <a
              href="mailto:<CONTACT_EMAIL>"
              className="inline-flex items-center gap-2 font-medium hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Mail className="h-5 w-5" />
              &lt;CONTACT_EMAIL&gt;
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Prefer social? Find us on the links in the footer.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="mb-1 block text-sm font-medium">
              Service of interest
            </label>
            <select
              id="service"
              name="service"
              defaultValue="Web Design"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              <option>Web Design</option>
              <option>Social Media Management</option>
              <option>Content Management</option>
              <option>Bundle / Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : (
              <>
                Send message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
              Thanks! We&apos;ll be in touch within one business day.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
