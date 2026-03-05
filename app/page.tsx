import type { Metadata } from "next";
import { DownloaderCard } from "@/components/downloader-card";

export const metadata: Metadata = {
  title: "Home",
  description:
    "InstaCatch helps you download Instagram posts, reels, and stories in HD quality.",
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="light-hero-bg dark:hero-bg px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              Download Instagram Content in Seconds
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Paste a post, reel, or story URL and get HD download links
              instantly with InstaCatch.
            </p>
          </div>

          <DownloaderCard />
        </div>
      </section>
    </main>
  );
}
