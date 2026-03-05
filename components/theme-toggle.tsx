"use client";

import { useEffect, useState } from "react";
import { toggleTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        toggleTheme();
        setIsDark(document.documentElement.classList.contains("dark"));
      }}
      className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
