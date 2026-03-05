import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Insta<span className="text-brand-500">Catch</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/about"
            className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Terms
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
