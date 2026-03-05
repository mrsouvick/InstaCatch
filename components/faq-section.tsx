"use client";

import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I download reels, posts, and stories?",
      answer:
        "Yes. InstaCatch supports all three formats as long as the Instagram content is publicly accessible.",
    },
    {
      question: "Why do some links fail?",
      answer:
        "Private, deleted, expired, or geo-restricted media can fail due to platform restrictions.",
    },
    {
      question: "Can I download multiple URLs at once?",
      answer:
        "Yes. Use Batch mode in InstaCatch Studio and paste one URL per line for sequential processing.",
    },
    {
      question: "Do you store my downloads?",
      answer:
        "No server-side media storage is used. Optional download history is stored in your browser only.",
    },
  ];

  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <div className="surface-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={item.question}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.question}
                    </span>
                    <span className="text-brand-600 dark:text-brand-300">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {item.answer}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

