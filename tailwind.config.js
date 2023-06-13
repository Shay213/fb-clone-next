/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: "400px",
      },
      keyframes: {
        slideInRightToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInBottomToTop: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInRightToLeft: "slideInRightToLeft 0.2s ease-in",
        slideInBottomToTop: "slideInBottomToTop 0.2s ease-in",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
