import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        side: {
          bg: "rgb(var(--side-bg) / <alpha-value>)",
          paper: "rgb(var(--side-paper) / <alpha-value>)",
          ink: "rgb(var(--side-ink) / <alpha-value>)",
          muted: "rgb(var(--side-muted) / <alpha-value>)",
          line: "rgb(var(--side-line) / <alpha-value>)",
          coral: "rgb(var(--side-coral) / <alpha-value>)",
          teal: "rgb(var(--side-teal) / <alpha-value>)",
          yellow: "rgb(var(--side-yellow) / <alpha-value>)"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgb(28 28 28 / 0.08)",
        "soft-dark": "0 24px 80px rgb(0 0 0 / 0.32)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-sc)", "sans-serif"],
        chinese: ["var(--font-noto-sans-sc)", "var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
