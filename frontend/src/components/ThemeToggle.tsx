"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="border border-gray-300 dark:border-slate-700 px-3 py-2 rounded-lg">
        ...
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="border border-gray-300 dark:border-slate-700 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}