import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://instacatch.vercel.app";

  return [
    { url: `${base}/`, priority: 1, changeFrequency: "daily" },
    { url: `${base}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/privacy`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${base}/terms`, priority: 0.5, changeFrequency: "yearly" },
  ];
}
