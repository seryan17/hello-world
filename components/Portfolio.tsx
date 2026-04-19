const PROJECTS = [
  {
    title: "Artisan Coffee Roasters",
    category: "Web Design",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Northside Yoga Studio",
    category: "Social Media",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Urban Living Realty",
    category: "Content Management",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    title: "Bloom Floral Co.",
    category: "Web Design",
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "Peak Fitness Gym",
    category: "Social Media",
    accent: "from-red-400 to-orange-500",
  },
  {
    title: "Greenleaf Landscaping",
    category: "Content Management",
    accent: "from-green-400 to-lime-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title mt-2">Recent work we&apos;re proud of</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A selection of projects across web, social, and content. Replace
            with your real case studies as you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-br ${project.accent} transition duration-500 group-hover:scale-105`}
                aria-hidden
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
