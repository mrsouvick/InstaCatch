import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edfcff",
          100: "#d2f6fe",
          200: "#aaeefc",
          300: "#71e0f9",
          400: "#2ec8ef",
          500: "#13b2db",
          600: "#118db4",
          700: "#167191",
          800: "#1b5c76",
          900: "#1a4d63",
        },
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(19,178,219,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
