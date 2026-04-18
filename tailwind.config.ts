import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: "#0E0D0B",
          surface: "#1A1714",
          border: "#2A2620",
          gold: "#C9A95E",
          goldLight: "#F5E9C7",
          ivory: "#F5E9C7",
          "gold-border-subtle": "rgba(201, 169, 94, 0.15)",
          "gold-border-medium": "rgba(201, 169, 94, 0.4)",
          "text-muted": "rgba(233, 217, 168, 0.7)",
          "text-dim": "rgba(255, 255, 255, 0.5)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
