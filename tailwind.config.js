/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: { fontFamily: { mono: "JetBrains Mono" } },
    },
    plugins: [require("@tailwindcss/forms")],
    extend: {},
  },
};
