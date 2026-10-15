import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          400: "#38BDF8",
          500: "#0A8CFF", // Electric Blue accent
          600: "#0072DB",
          700: "#0B3FA8", // Deep Blue
          800: "#082F80",
          900: "#06225C",
        },
        navy: {
          800: "#101D3F",
          900: "#0A1530", // Deep navy from logo wordmark
          950: "#050C1C",
        },
        ink: {
          DEFAULT: "#0E0E10", // Brutalist dark background
          light: "#17181C",
          card: "#131417",
          border: "#23252B",
        },
        paper: {
          DEFAULT: "#D8D9DC", // Reference light grey
          light: "#EAEBED",
          dark: "#C7C9CE",
          border: "#BDC0C7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        micro: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
