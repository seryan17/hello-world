import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(60rem_30rem_at_50%_-10%,theme(colors.brand.200/60),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_50%_-10%,theme(colors.brand.900/40),transparent)]"
        aria-hidden
      />

      <div className="container-page py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm dark:border-brand-800 dark:bg-slate-900/70 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            Digital services for growing brands
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Websites, social, and content —{" "}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              done right.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <span className="font-semibold">&lt;BRAND_NAME&gt;</span> partners with small businesses
            to design modern websites, manage social channels, and publish
            content that actually converts. One team, one invoice, zero
            headaches.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#services" className="btn-primary">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { k: "Avg. turnaround", v: "2–3 weeks" },
              { k: "Happy clients", v: "100% satisfaction" },
              { k: "Pricing", v: "Flat-rate, no surprises" },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-slate-200 bg-white/60 p-4 text-center backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.k}
                </dt>
                <dd className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
