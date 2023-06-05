/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{html,js}"],
  // Idk. One solution to rendering tailwind in deployed version is to include this purge below. Not working for me, though.
  purge: ["./src/components/**/*.{js,jsx}", "./public/index.html"],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
