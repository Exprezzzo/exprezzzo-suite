/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        exprezzzo: "#0F172A",
        accent: "#FACC15"
      }
    }
  },
  plugins: [],
}
