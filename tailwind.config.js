/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deep: {
          950: "#07111c",
          900: "#0b1727",
          800: "#11243a",
          700: "#16314d",
        },
        neon: {
          orange: "#ff7a18",
          sand: "#ffb975",
          mint: "#67f0c0",
          ice: "#eef7ff",
          steel: "#9eb2c8",
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
