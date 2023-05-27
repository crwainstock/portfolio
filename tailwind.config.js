/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
