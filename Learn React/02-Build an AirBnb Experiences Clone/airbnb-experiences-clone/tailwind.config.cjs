/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./*html",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
  plugins: [],
};
