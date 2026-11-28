import type { Config } from "tailwindcss";

// Tailwind maps to the CSS-variable design tokens in app/globals.css.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // rgb(channels / alpha) so opacity modifiers like bg-brand/80 work.
      colors: Object.fromEntries(
        ["bg", "surface", "ink", "muted", "line", "brand", "brand-dark", "accent", "sage", "lime", "teal", "slate"].map(
          (name) => [name, `rgb(var(--color-${name}) / <alpha-value>)`]
        )
      ),
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
