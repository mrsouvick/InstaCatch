import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "InstaCatch - Instagram Downloader",
    template: "%s | InstaCatch",
  },
  description: siteConfig.description,
  keywords: [
    "Instagram downloader",
    "Download Instagram reels",
    "Instagram story downloader",
    "InstaCatch",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "InstaCatch",
    description:
      "Paste an Instagram link and download posts, reels, or stories instantly.",
    type: "website",
    url: siteConfig.url,
    siteName: "InstaCatch",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "InstaCatch Instagram Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaCatch",
    description: "Fast Instagram downloader for posts, reels, and stories.",
    images: [siteConfig.ogImage],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="adsterra-script"
          strategy="beforeInteractive"
          src="https://pl28885059.effectivegatecpm.com/6c/bf/44/6cbf4415d450572c63a6443ccd7b2d29.js"
        />
      </head>
      <body>
        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1707515979755318"
          crossOrigin="anonymous"
        />

        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
