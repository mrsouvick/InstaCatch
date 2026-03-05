import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-slate-400">
        <p>Copyright {new Date().getFullYear()} InstaCatch. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-brand-500">
            About
          </Link>
          <Link href="/privacy" className="hover:text-brand-500">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-brand-500">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

