import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for InstaCatch.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Terms of Use
      </h1>
      <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
        <p>
          InstaCatch is provided as-is without warranties. Availability may vary
          due to Instagram policy changes or third-party extractor limitations.
        </p>
        <p>
          You are responsible for ensuring legal rights to download and use the
          media content.
        </p>
        <p>
          You agree not to misuse this service for unlawful scraping, copyright
          infringement, or abuse.
        </p>
      </div>
    </main>
  );
}
