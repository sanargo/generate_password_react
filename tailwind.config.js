/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter": ['Inter', 'sans-serif'],
      "karla": ['Karla', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

