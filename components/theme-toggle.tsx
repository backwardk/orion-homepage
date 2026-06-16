"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={t(siteCopy.controls.theme)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/70 text-foreground shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
    >
      {isDark ? <Sun className="size-4" strokeWidth={1.7} /> : <Moon className="size-4" strokeWidth={1.7} />}
    </button>
  );
}
