import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "SEO guides and practical tips for downloading Instagram reels, stories, and posts.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "InstaCatch Blog",
    description:
      "SEO guides and practical tips for downloading Instagram reels, stories, and posts.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="surface-card p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          InstaCatch Blog
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Learn how to download public Instagram media and avoid common issues.
        </p>

        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-950/30"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-brand-600 dark:text-brand-300">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
