import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: now,
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${base}/about`,
      lastModified: now,
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: "yearly",
    },
    ...blogEntries,
  ];
}
