/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "250px",
      xsmax: { raw: "(max-height: 539px)" },
      xxsmax: { raw: "(max-width: 300px)" },
      projectsmall: { raw: "(max-width: 320px)" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
