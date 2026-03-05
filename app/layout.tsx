import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://instacatch.vercel.app"),
  title: {
    default: "InstaCatch - Instagram Downloader",
    template: "%s | InstaCatch",
  },
  description:
    "Download Instagram posts, reels, and stories in high quality with InstaCatch.",
  keywords: [
    "Instagram downloader",
    "Download Instagram reels",
    "Instagram story downloader",
    "InstaCatch",
  ],
  openGraph: {
    title: "InstaCatch",
    description:
      "Paste an Instagram link and download posts, reels, or stories instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaCatch",
    description: "Fast Instagram downloader for posts, reels, and stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
