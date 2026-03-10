import type { Metadata } from "next";
import Link from "next/link";
import { DownloaderCard } from "@/components/downloader-card";
import { FaqSection } from "@/components/faq-section";
import { InnovationSections } from "@/components/innovation-sections";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instagram Downloader",
  description:
    "InstaCatch helps you download Instagram posts, reels, and stories in HD quality.",
  keywords: [
    "Instagram downloader",
    "Instagram reels downloader",
    "Instagram story downloader",
    "download Instagram video",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "InstaCatch",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I download reels, posts, and stories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. InstaCatch supports all three formats as long as the Instagram content is publicly accessible.",
        },
      },
      {
        "@type": "Question",
        name: "Why do some links fail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private, deleted, expired, or geo-restricted media can fail due to platform restrictions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download multiple URLs at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Use Batch mode in InstaCatch Studio and paste one URL per line for sequential processing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you store my downloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No server-side media storage is used. Optional download history is stored in your browser only.",
        },
      },
    ],
  };

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
      <section className="px-4 pb-10 sm:px-6">
        <div className="mx-auto w-full max-w-4xl">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Latest Guides
            </h2>
            <div className="mt-6 grid gap-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
                >
                  {post.title}
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-5 inline-block text-sm font-semibold text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
            >
              Read all blog posts
            </Link>
          </div>
        </div>
      </section>
      <FaqSection />
    </main>
  );
}
