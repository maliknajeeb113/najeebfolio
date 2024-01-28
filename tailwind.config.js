/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Magilio: ["Magilio", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
