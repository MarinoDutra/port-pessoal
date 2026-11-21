"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignora falhas de acesso ao localStorage
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro e escuro"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      title="Alternar tema"
    >
      {!mounted ? (
        <span className="text-sm">•</span>
      ) : isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.062a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-17.938a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.062a1 1 0 0 1-1 1ZM4.222 5.636a1 1 0 0 1 0-1.414l.75-.75a1 1 0 1 1 1.415 1.414l-.75.75a1 1 0 0 1-1.415 0Zm13.641 13.642a1 1 0 0 1 0-1.415l.75-.75a1 1 0 0 1 1.415 1.415l-.75.75a1 1 0 0 1-1.415 0ZM2 13a1 1 0 1 1 0-2h1.062a1 1 0 1 1 0 2H2Zm18.938 0a1 1 0 1 1 0-2H22a1 1 0 1 1 0 2h-1.062ZM4.222 18.364a1 1 0 0 1 1.415 0l.75.75a1 1 0 0 1-1.415 1.415l-.75-.75a1 1 0 0 1 0-1.415ZM17.863 4.722a1 1 0 0 1 1.415 0l.75.75a1 1 0 1 1-1.415 1.414l-.75-.75a1 1 0 0 1 0-1.414Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )}
    </button>
  );
}
