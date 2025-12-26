/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        radioCanadaBig: ["RadioCanadaBig", "sans-serif"],
      },
    },
  },
  plugins: [],
};
