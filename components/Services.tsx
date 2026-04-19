import { Check, Layout, MessageSquare, PenSquare } from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "Web Design",
    blurb:
      "Beautiful, fast, mobile-first websites that turn visitors into customers.",
    features: [
      "Custom design systems",
      "Responsive & accessible",
      "SEO-ready out of the box",
      "Analytics & tracking setup",
    ],
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    blurb:
      "Consistent, on-brand social presence across the platforms your audience actually uses.",
    features: [
      "Content calendar planning",
      "Post design & copywriting",
      "Community engagement",
      "Monthly performance reports",
    ],
  },
  {
    icon: PenSquare,
    title: "Content Management",
    blurb:
      "Publish valuable content that ranks, educates, and drives organic traffic.",
    features: [
      "Blog & newsletter writing",
      "SEO keyword strategy",
      "CMS setup & migrations",
      "Editorial workflow",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title mt-2">Everything your brand needs online</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Pick one service or bundle all three — we&apos;ll tailor a plan that
            fits your goals and budget.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="card flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <service.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {service.blurb}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
