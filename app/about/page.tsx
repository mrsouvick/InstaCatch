import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about InstaCatch and how it works.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="surface-card p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          About InstaCatch
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          InstaCatch is a modern Instagram downloader built to help users fetch
          publicly available posts, reels, and stories quickly. It offers a
          clean interface, media preview, and one-click downloads.
        </p>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Our focus is speed, privacy, and ease of use. No account is required
          to use the downloader.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-950/30">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
            Created by Souvick Kumar Halder
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            reach.souvick@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
