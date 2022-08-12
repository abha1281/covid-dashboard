const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      primary: "#e11e17",
      secondary: "#4A4AA5",
      ...defaultTheme.colors,
    },
    extend: {},
  },
  plugins: [],
};
