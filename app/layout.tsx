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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  category: "technology",
  applicationName: "InstaCatch",
  referrer: "origin-when-cross-origin",
  creator: "Souvick Kumar Halder",
  publisher: "InstaCatch",
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
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InstaCatch",
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InstaCatch",
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "reach.souvick@gmail.com",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="adsterra-script"
          strategy="beforeInteractive"
          src="https://pl28885059.effectivegatecpm.com/6c/bf/44/6cbf4415d450572c63a6443ccd7b2d29.js"
        />
        <Script
          id="adsterra-atoptions"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `atOptions = {
  'key' : '6bed560f8a8c2d53dec3742515d95b92',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {}
};`,
          }}
        />
        <Script
          id="adsterra-invoke"
          strategy="beforeInteractive"
          src="https://www.highperformanceformat.com/6bed560f8a8c2d53dec3742515d95b92/invoke.js"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

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
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
