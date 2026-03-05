"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "instacatch-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const shouldUseDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {!mounted && (
        <span className="sr-only" aria-hidden="true">
          loading-theme
        </span>
      )}
    </>
  );
}

export function toggleTheme() {
  const nextIsDark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", nextIsDark);
  localStorage.setItem(THEME_KEY, nextIsDark ? "dark" : "light");
}
