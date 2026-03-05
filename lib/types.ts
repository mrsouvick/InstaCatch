export type MediaType = "image" | "video";

export interface MediaItem {
  url: string;
  type: MediaType;
  thumbnail?: string;
  quality?: string;
}

export interface DownloadResponse {
  success: boolean;
  sourceType: "post" | "reel" | "story" | "unknown";
  media: MediaItem[];
  message?: string;
}

export interface HistoryItem {
  url: string;
  sourceType: string;
  createdAt: string;
}
