"use client";

import axios from "axios";
import { FormEvent, useMemo, useState } from "react";
import { DownloadHistory, saveHistory } from "@/components/download-history";
import { LoadingSpinner } from "@/components/loading-spinner";
import { MediaPreview } from "@/components/media-preview";
import type { DownloadResponse } from "@/lib/types";
import {
  detectInstagramType,
  extractInstagramIdentifier,
  isValidInstagramUrl,
  sanitizeInstagramUrl,
} from "@/lib/url";

type StudioMode = "single" | "batch";

interface BatchResult {
  url: string;
  success: boolean;
  sourceType: string;
  mediaCount: number;
  firstMediaUrl?: string;
  message?: string;
}

export function DownloaderCard() {
  const [mode, setMode] = useState<StudioMode>("single");
  const [url, setUrl] = useState("");
  const [batchInput, setBatchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResponse | null>(null);
  const [batchResults, setBatchResults] = useState<BatchResult[]>([]);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const singleType = useMemo(() => detectInstagramType(url), [url]);
  const singleId = useMemo(() => extractInstagramIdentifier(url), [url]);

  async function handleSingleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const response = await axios.post<DownloadResponse>("/api/download", { url });
      setResult(response.data);

      if (!response.data.success) {
        setError(response.data.message ?? "Unable to process this URL.");
      } else {
        saveHistory({
          url,
          sourceType: response.data.sourceType,
          createdAt: new Date().toISOString(),
        });
      }
    } catch (requestError: unknown) {
      if (axios.isAxiosError(requestError)) {
        setError(requestError.response?.data?.message ?? "Invalid Instagram URL.");
      } else {
        setError("Unable to download media at this moment.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleBatchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);
    setBatchResults([]);

    const links = Array.from(
      new Set(
        batchInput
          .split("\n")
          .map((item) => sanitizeInstagramUrl(item))
          .filter(Boolean),
      ),
    );

    if (!links.length) {
      setError("Please add at least one Instagram URL.");
      return;
    }

    setLoading(true);
    setBatchProgress({ current: 0, total: links.length });

    const nextResults: BatchResult[] = [];

    for (let index = 0; index < links.length; index += 1) {
      const currentUrl = links[index];

      if (!isValidInstagramUrl(currentUrl)) {
        nextResults.push({
          url: currentUrl,
          success: false,
          sourceType: "unknown",
          mediaCount: 0,
          message: "Invalid Instagram URL.",
        });
        setBatchResults([...nextResults]);
        setBatchProgress({ current: index + 1, total: links.length });
        continue;
      }

      try {
        const response = await axios.post<DownloadResponse>("/api/download", {
          url: currentUrl,
        });

        const payload = response.data;
        nextResults.push({
          url: currentUrl,
          success: payload.success,
          sourceType: payload.sourceType,
          mediaCount: payload.media.length,
          firstMediaUrl: payload.media[0]?.url,
          message: payload.message,
        });

        if (payload.success) {
          saveHistory({
            url: currentUrl,
            sourceType: payload.sourceType,
            createdAt: new Date().toISOString(),
          });
        }
      } catch {
        nextResults.push({
          url: currentUrl,
          success: false,
          sourceType: detectInstagramType(currentUrl),
          mediaCount: 0,
          message: "Failed to fetch media.",
        });
      }

      setBatchResults([...nextResults]);
      setBatchProgress({ current: index + 1, total: links.length });
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto w-full max-w-5xl animate-float">
      <div className="surface-card p-4 sm:p-7">
        <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              InstaCatch Studio
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Pro mode supports single and batch download workflows.
            </p>
          </div>
          <div className="inline-flex rounded-full border border-slate-300/90 bg-white/90 p-1 dark:border-slate-700 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setMode("single")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                mode === "single"
                  ? "bg-brand-500 text-white"
                  : "text-slate-600 hover:text-brand-700 dark:text-slate-300"
              }`}
            >
              Single
            </button>
            <button
              type="button"
              onClick={() => setMode("batch")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                mode === "batch"
                  ? "bg-brand-500 text-white"
                  : "text-slate-600 hover:text-brand-700 dark:text-slate-300"
              }`}
            >
              Batch
            </button>
          </div>
        </div>

        {mode === "single" ? (
          <form onSubmit={handleSingleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="instagram-url">
              Instagram URL
            </label>
            <input
              id="instagram-url"
              type="url"
              required
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://www.instagram.com/reel/..."
              className="h-12 w-full rounded-xl border border-slate-300/90 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-brand-900/40"
            />
            <div className="grid grid-cols-2 gap-2">
              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Download"}
              </button>
              <button
                type="button"
                onClick={async () => {
                  if (!url) return;
                  await navigator.clipboard.writeText(url);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1200);
                }}
                className="h-12 rounded-xl border border-slate-300 px-4 text-sm font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
              >
                {copied ? "Copied" : "Copy Link"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleBatchSubmit} className="space-y-3">
            <textarea
              value={batchInput}
              onChange={(event) => setBatchInput(event.target.value)}
              placeholder={
                "Paste multiple Instagram links, one per line...\nhttps://www.instagram.com/p/...\nhttps://www.instagram.com/reel/..."
              }
              rows={6}
              className="w-full rounded-xl border border-slate-300/90 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-brand-900/40"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600 disabled:opacity-60"
            >
              {loading ? "Processing Batch..." : "Run Batch Download"}
            </button>
          </form>
        )}

        <div className="mt-4 space-y-3">
          {mode === "single" && url && isValidInstagramUrl(url) && (
            <div className="rounded-xl border border-slate-200/80 bg-white/70 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-300">
              Smart insight: Type <strong>{singleType}</strong>
              {singleId ? (
                <>
                  {" "}
                  | Identifier <strong>{singleId}</strong>
                </>
              ) : null}
            </div>
          )}

          {loading && <LoadingSpinner />}

          {!loading && error && (
            <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-300">
              {error}
            </p>
          )}
        </div>

        {mode === "single" && !loading && result?.success && (
          <MediaPreview media={result.media} />
        )}

        {mode === "batch" && batchProgress.total > 0 && (
          <section className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
              <p>Batch progress</p>
              <p>
                {batchProgress.current}/{batchProgress.total}
              </p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full bg-brand-500 transition-all"
                style={{
                  width: `${(batchProgress.current / Math.max(batchProgress.total, 1)) * 100}%`,
                }}
              />
            </div>

            {!!batchResults.length && (
              <div className="mt-4 grid gap-3">
                {batchResults.map((item) => (
                  <article
                    key={`${item.url}-${item.mediaCount}-${item.success}`}
                    className="rounded-xl border border-slate-200/80 bg-white/70 p-3 dark:border-slate-800 dark:bg-slate-950/30"
                  >
                    <p className="line-clamp-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item.url}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {item.success
                        ? `Success | ${item.sourceType} | ${item.mediaCount} media item(s)`
                        : `Failed | ${item.message ?? "Unable to process URL"}`}
                    </p>
                    {item.success && item.firstMediaUrl && (
                      <a
                        href={item.firstMediaUrl}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex rounded-full bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-600"
                      >
                        Quick Download
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      <DownloadHistory />
    </div>
  );
}

