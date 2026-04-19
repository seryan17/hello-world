import { Award, Clock, HeartHandshake, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Partnership-first",
    body: "We're not a faceless agency. You work directly with the people doing the work.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    body: "Clear timelines, no ghosting. Most projects wrap within 2–3 weeks.",
  },
  {
    icon: Award,
    title: "Quality obsessed",
    body: "We sweat the details so your brand looks sharp everywhere it shows up.",
  },
  {
    icon: Sparkles,
    title: "Results driven",
    body: "Every decision ladders up to your business goals, not vanity metrics.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title mt-2">
            A small studio that treats your brand like our own.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            <span className="font-semibold">&lt;BRAND_NAME&gt;</span> was founded
            to give small businesses the same caliber of digital presence that
            big brands take for granted — without the big-agency overhead,
            jargon, or runaround.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Whether you need a brand-new website, a fresh social media
            strategy, or a steady stream of content that ranks on Google, we
            bring the craft, care, and consistency to get it done.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => (
            <li key={v.title} className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <v.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
