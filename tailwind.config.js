/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        blue: {
          50: "#e6f9fd",
          100: "#ccf3fb",
          200: "#99e7f7",
          300: "#66dbf3",
          400: "#33cfef",
          500: "#00aeef",
          600: "#008bbf",
          700: "#00688f",
          800: "#004560",
          900: "#002330",
          950: "#00141c",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)",
        "card-hover":
          "0 1px 2px rgba(15, 23, 42, 0.06), 0 16px 40px -16px rgba(0, 174, 239, 0.35)",
        glow: "0 0 0 1px rgba(0,174,239,0.25), 0 12px 40px -12px rgba(0,174,239,0.45)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
