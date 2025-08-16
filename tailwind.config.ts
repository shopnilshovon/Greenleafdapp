import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenleaf: {
          500: "#22c55e", // Tailwind green-500
          600: "#16a34a",
          700: "#15803d",
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 197, 94, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
