import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          bg: "#FAF7F0",
          surface: "#F5EBD0",
          border: "#E5D9B8",
          gold: "#C9A95E",
          goldDark: "#8B6F2E",
          ink: "#2C2416",
        },
        obsidian: {
          bg: "#0E0D0B",
          surface: "#1A1714",
          border: "#2A2620",
          gold: "#C9A95E",
          goldLight: "#F5E9C7",
          ivory: "#F5E9C7",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
