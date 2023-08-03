/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#060926",
        secondary: "#E63333",
        container: "#F8F8FB",
        tertiary: "#34C28E"
      }
    },
  },
  plugins: [],
}

