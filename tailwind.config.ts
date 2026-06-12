import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#09090B",
        surface: "#111113",
        raised: "#18181C",
        sunset: {
          core: "#FF6B35",
          warm: "#F5A623",
          coral: "#FF8C42",
          deep: "#C0392B",
        },
        dusk: "#6B2D5C",
        night: "#1A1A2E",
        aurora: {
          purple: "#A855F7",
          pink: "#FF4D8F",
          orange: "#FF8C42",
        },
        lavender: "#C4B5FD",
        primary: "#F8F8F8",
        secondary: "#A1A1AA",
        muted: "#52525B",
      },
      fontFamily: {
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"Fira Code"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(100deg, #FF6B35 0%, #F5A623 50%, #FF8C42 100%)",
        "gradient-dusk": "linear-gradient(180deg, #6B2D5C 0%, #1A1A2E 100%)",
        "gradient-glow":
          "radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)",
        "gradient-aurora":
          "linear-gradient(100deg, #A855F7 0%, #FF4D8F 45%, #FF8C42 100%)",
      },
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,166,35,0.6)" },
          "50%": { boxShadow: "0 0 0 6px rgba(245,166,35,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
