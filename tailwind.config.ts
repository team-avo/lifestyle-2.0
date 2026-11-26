import type { Config } from "tailwindcss";

// Tailwind maps to the CSS-variable design tokens in app/globals.css.
// Tokens are the single source of truth; exact brand values get measured
// off the live site in Phase 1 (see ARCHITECTURE.md Section 6).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        brand: "var(--color-brand)",
        "brand-dark": "var(--color-brand-dark)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};

export default config;
