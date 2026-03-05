import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about InstaCatch and how it works.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        About InstaCatch
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        InstaCatch is a modern Instagram downloader built to help users fetch
        publicly available posts, reels, and stories quickly. It offers a clean
        interface, media preview, and one-click downloads.
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Our focus is speed, privacy, and ease of use. No account is required to
        use the downloader.
      </p>
    </main>
  );
}
