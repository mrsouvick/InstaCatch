export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-download-instagram-reels",
    title: "How to Download Instagram Reels in HD (Step-by-Step)",
    description:
      "A practical guide to downloading public Instagram Reels in high quality on mobile and desktop using InstaCatch.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    keywords: [
      "Instagram reels downloader",
      "download Instagram reels",
      "how to save reels",
      "InstaCatch reels guide",
    ],
    content: [
      "Downloading Instagram Reels should be fast and simple. InstaCatch is built for public Instagram URLs and gives you direct media downloads without app installation.",
      "Open Instagram, copy the Reel link, then paste it into InstaCatch on the homepage. The app detects available media and shows a preview before download.",
      "Choose the quality option shown in the results and download. If a URL fails, the Reel may be private, removed, or restricted by region.",
      "Use downloaded media responsibly and only for content you have permission to use.",
    ],
  },
  {
    slug: "instagram-story-downloader-guide",
    title: "Instagram Story Downloader Guide: What Works and What Fails",
    description:
      "Learn how Instagram Story downloads work, common failure reasons, and how to improve success rate with valid public links.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    keywords: [
      "Instagram story downloader",
      "download Instagram stories",
      "public Instagram story links",
      "story download errors",
    ],
    content: [
      "Instagram Stories are time-limited and can expire quickly. For best results, copy and submit the Story URL while it is still active.",
      "Stories from private accounts are not accessible to public downloader tools. Deleted or expired Stories also cannot be recovered.",
      "With InstaCatch, paste the Story URL and wait for preview generation. If media is available and public, you can download directly.",
      "When a Story fails, check the URL format and availability first before retrying.",
    ],
  },
  {
    slug: "is-instagram-downloading-legal",
    title: "Is Downloading Instagram Content Legal? Quick Compliance Checklist",
    description:
      "Understand copyright and usage basics before downloading Instagram photos, videos, reels, and stories.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    keywords: [
      "Instagram download legal",
      "copyright Instagram reels",
      "Instagram content permissions",
      "download compliance checklist",
    ],
    content: [
      "Tools like InstaCatch process public URLs, but legality depends on how you use downloaded content.",
      "A safe rule is to download only content you own or content where you have clear permission from the owner.",
      "Avoid re-uploading copyrighted media without rights. Commercial usage generally requires explicit authorization.",
      "Always follow local law and platform terms. If you are unsure, request permission before use.",
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
