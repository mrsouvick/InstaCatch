export function sanitizeInstagramUrl(input: string): string {
  return input.trim().split("?")[0];
}

export function isValidInstagramUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return /(^|\.)instagram\.com$/i.test(parsed.hostname);
  } catch {
    return false;
  }
}

export function detectInstagramType(
  url: string,
): "post" | "reel" | "story" | "unknown" {
  if (url.includes("/reel/")) return "reel";
  if (url.includes("/p/")) return "post";
  if (url.includes("/stories/")) return "story";
  return "unknown";
}

export function extractInstagramIdentifier(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:reel|p|stories\/[^/]+)\/([^/?#]+)/i);
  return match?.[1] ?? null;
}
