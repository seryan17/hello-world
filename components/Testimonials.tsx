import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "They rebuilt our website in two weeks and our bookings doubled the following month. Couldn't recommend them more highly.",
    name: "Maria Chen",
    role: "Owner, Northside Yoga Studio",
  },
  {
    quote:
      "Our Instagram finally looks like a real brand. The content calendar takes all the guesswork out of posting.",
    name: "James Whitaker",
    role: "Founder, Artisan Coffee Roasters",
  },
  {
    quote:
      "The blog strategy they built started ranking on Google within a month. It's been a game-changer for organic leads.",
    name: "Priya Patel",
    role: "Marketing Lead, Urban Living Realty",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title mt-2">What clients are saying</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card flex h-full flex-col">
              <Quote
                className="h-8 w-8 text-brand-600 dark:text-brand-400"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-slate-700 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
