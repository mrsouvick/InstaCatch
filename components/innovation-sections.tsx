export function InnovationSections() {
  const features = [
    {
      title: "Smart URL Intelligence",
      description:
        "InstaCatch automatically detects post, reel, or story patterns and adapts the extraction flow.",
    },
    {
      title: "Batch Download Studio",
      description:
        "Process multiple Instagram links in one run with live progress and per-link status cards.",
    },
    {
      title: "Fast Preview Engine",
      description:
        "Preview media instantly before downloading so users can pick the right asset quickly.",
    },
    {
      title: "Responsive Glass UI",
      description:
        "Designed for mobile-first usage with adaptive spacing, hierarchy, and interactions.",
    },
  ];

  const steps = [
    "Paste one or multiple Instagram URLs.",
    "InstaCatch extracts direct HD media links.",
    "Preview and download instantly.",
  ];

  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
            Innovation Layer
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Built as a Creator-Focused Download Workspace
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/30"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
            Workflow
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Three Steps to Download
          </h2>
          <ol className="mt-6 space-y-3">
            {steps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/30"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
                  Step {index + 1}
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

