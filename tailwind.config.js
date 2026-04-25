/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deep: {
          950: "#120816",
          900: "#1a0d24",
          800: "#27153a",
          700: "#342055",
        },
        neon: {
          orange: "#8f5cff",
          sand: "#c89bff",
          mint: "#a78bfa",
          ice: "#f5efff",
          steel: "#c4b5d6",
        },
      },
      fontFamily: {
        display: ["Antonio", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
