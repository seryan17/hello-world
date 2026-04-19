import { Check } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Starter",
    price: "$499",
    cadence: "/ project",
    description:
      "Perfect for solo founders or small shops needing a polished online presence.",
    features: [
      "5-page responsive website",
      "Basic SEO setup",
      "1 social platform managed",
      "4 posts / month",
      "Email support",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    cadence: "/ month",
    description:
      "Our most popular plan for brands ready to scale traffic and audience.",
    features: [
      "Custom website + ongoing updates",
      "2 social platforms managed",
      "12 posts / month + stories",
      "2 blog posts / month",
      "Monthly strategy call",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    cadence: "",
    description:
      "Tailored engagements for established businesses with specific needs.",
    features: [
      "Full web, social & content ownership",
      "Unlimited platforms",
      "Dedicated content calendar",
      "SEO & analytics deep-dives",
      "Priority support",
    ],
    cta: "Request a proposal",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title mt-2">Simple, flat-rate packages</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            No hourly billing, no hidden fees. Pick the package that matches
            where your business is today.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`card flex flex-col ${
                tier.highlighted
                  ? "ring-2 ring-brand-600 dark:ring-brand-400"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {tier.cadence}
                  </span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`mt-8 ${tier.highlighted ? "btn-primary" : "btn-secondary"}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
