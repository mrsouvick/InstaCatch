import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for InstaCatch.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Privacy Policy
      </h1>
      <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
        <p>
          InstaCatch does not require account sign-in. We process submitted
          Instagram links only to extract downloadable media.
        </p>
        <p>
          We do not permanently store downloaded files on our servers. Optional
          download history is stored locally in your browser.
        </p>
        <p>
          By using this service, you agree to use it in compliance with
          applicable copyright laws and platform terms.
        </p>
      </div>
    </main>
  );
}
