import type { Metadata } from "next";
import { DownloaderCard } from "@/components/downloader-card";
import { FaqSection } from "@/components/faq-section";
import { InnovationSections } from "@/components/innovation-sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "InstaCatch helps you download Instagram posts, reels, and stories in HD quality.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "InstaCatch",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="light-hero-bg relative px-4 py-16 sm:px-6 sm:py-24 dark:hero-bg">
        <div className="grid-overlay absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-10 top-8 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
              Fast Instagram Downloader
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Download Posts, Reels, and Stories in HD
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-700 sm:text-base dark:text-slate-300">
              Paste your public Instagram URL and instantly preview and download
              high-quality media on any device.
            </p>
          </div>

          <DownloaderCard />

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 text-center sm:grid-cols-3">
            <div className="surface-card px-4 py-5">
              <p className="text-xl font-bold text-slate-900 dark:text-white">HD+</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                High quality downloads
              </p>
            </div>
            <div className="surface-card px-4 py-5">
              <p className="text-xl font-bold text-slate-900 dark:text-white">Studio</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Single and batch mode
              </p>
            </div>
            <div className="surface-card px-4 py-5">
              <p className="text-xl font-bold text-slate-900 dark:text-white">Smart</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                URL intelligence insights
              </p>
            </div>
          </div>
        </div>
      </section>
      <InnovationSections />
      <FaqSection />
    </main>
  );
}
