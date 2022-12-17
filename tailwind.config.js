/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter", "night"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
