"use client";

import { useEffect, useState } from "react";
import type { HistoryItem } from "@/lib/types";

const HISTORY_KEY = "instacatch-history";

export function saveHistory(item: HistoryItem) {
  const current = loadHistory();
  const next = [item, ...current].slice(0, 8);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
}

function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const value = localStorage.getItem(HISTORY_KEY);
    return value ? (JSON.parse(value) as HistoryItem[]) : [];
  } catch {
    return [];
  }
}

export function DownloadHistory() {
  const [items, setItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setItems(loadHistory());
  }, []);

  if (!items.length) return null;

  return (
    <section className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-sm font-semibold text-slate-800 dark:text-slate-100">
        Recent Downloads
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={`${item.url}-${item.createdAt}`} className="text-sm">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="line-clamp-1 text-brand-600 hover:underline dark:text-brand-300"
            >
              {item.url}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {item.sourceType} • {new Date(item.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
