"use client";

import type { MediaItem } from "@/lib/types";

export function MediaPreview({ media }: { media: MediaItem[] }) {
  if (!media.length) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Preview
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {media.map((item, index) => (
          <article
            key={`${item.url}-${index}`}
            className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="aspect-[4/5] bg-slate-200/50 dark:bg-slate-800">
              {item.type === "video" ? (
                <video
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  poster={item.thumbnail}
                >
                  <source src={item.url} />
                </video>
              ) : (
                // Dynamic external URLs are not known at build time.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.url}
                  alt={`Instagram media ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {item.type} | {item.quality ?? "HD"}
              </p>
              <a
                href={item.url}
                download
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-600"
              >
                Download
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

