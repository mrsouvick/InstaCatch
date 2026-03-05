"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { DownloadHistory, saveHistory } from "@/components/download-history";
import { LoadingSpinner } from "@/components/loading-spinner";
import { MediaPreview } from "@/components/media-preview";
import type { DownloadResponse } from "@/lib/types";

export function DownloaderCard() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResponse | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

  return (
    <div className="mx-auto w-full max-w-4xl animate-float">
      <div className="rounded-3xl border border-white/20 bg-white/85 p-4 shadow-xl backdrop-blur-xl sm:p-7 dark:border-slate-700/50 dark:bg-slate-900/80">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="url"
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Paste Instagram post, reel, or story URL..."
            className="h-12 flex-1 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-brand-900/40"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="h-12 min-w-28 rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600 disabled:opacity-60"
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

        <div className="mt-4 min-h-10">
          {loading && <LoadingSpinner />}
          {!loading && error && (
            <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-300">
              {error}
            </p>
          )}
        </div>

        {!loading && result?.success && <MediaPreview media={result.media} />}
      </div>

      <DownloadHistory />
    </div>
  );
}
