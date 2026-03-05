import axios from "axios";
import { instagramGetUrl } from "instagram-url-direct";
import { snapsave } from "snapsave-media-downloader";
import { detectInstagramType } from "@/lib/url";
import type { DownloadResponse, MediaItem } from "@/lib/types";

interface SnapSaveMedia {
  url: string;
  type: "video" | "image";
  thumbnail?: string;
  resolution?: string;
}

function normalizeMedia(input: SnapSaveMedia[]): MediaItem[] {
  return input
    .filter((item) => Boolean(item.url))
    .map((item) => ({
      url: item.url,
      type: item.type,
      thumbnail: item.thumbnail,
      quality: item.resolution ?? "HD",
    }));
}

async function fetchWithSnapSave(url: string): Promise<MediaItem[]> {
  const response = await snapsave(url, {
    retry: 2,
    retryDelay: 400,
    proxy: process.env.EXTRACTOR_PROXY || undefined,
  });
  const media = response?.data?.media as SnapSaveMedia[] | undefined;
  return media ? normalizeMedia(media) : [];
}

async function fetchWithInstagramDirect(url: string): Promise<MediaItem[]> {
  const fallback = await instagramGetUrl(url);
  return (fallback.media_details ?? []).map((item) => ({
    url: item.url,
    type: item.type === "video" ? "video" : "image",
    thumbnail: item.thumbnail,
    quality: "HD",
  }));
}

export async function extractInstagramMedia(url: string): Promise<DownloadResponse> {
  const sourceType = detectInstagramType(url);
  let media: MediaItem[] = [];

  try {
    media = await fetchWithSnapSave(url);
  } catch {
    media = [];
  }

  // Fallback for regular posts/reels when SnapSave is unavailable.
  if (media.length === 0 && sourceType !== "story") {
    try {
      media = await fetchWithInstagramDirect(url);
    } catch {
      media = [];
    }
  }

  if (media.length === 0) {
    return {
      success: false,
      sourceType,
      media: [],
      message:
        "Unable to extract media from this link. Ensure it is a public Instagram post, reel, or story.",
    };
  }

  // Resolve redirects once so download links are stable and direct.
  const resolved = await Promise.all(
    media.map(async (item) => {
      try {
        const head = await axios.head(item.url, { maxRedirects: 5, timeout: 8000 });
        return { ...item, url: head.request?.res?.responseUrl || item.url };
      } catch {
        return item;
      }
    }),
  );

  return {
    success: true,
    sourceType,
    media: resolved,
  };
}
