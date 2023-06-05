/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{html,js}"],
  purge: ["./src/components/**/*.{js,jsx}", "./public/index.html"],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
