/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  content: [
    "./components/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./App.jsx",
    "./index.html",
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

// Having trouble getting tailwind to render -- showing up in elements in Browser, but not in render
