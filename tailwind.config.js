/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pyel: "#ef971a",
      },
    },
  },
  plugins: [],
};
