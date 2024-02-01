/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
    primary: "#28d3fe",
    secondary: "#f2f2f2",
      },
container: {
  center: true,
    padding: {
    DEFAULT: "1rem",
      sm: "3rem",
        },
},
  },
},
plugins: [],
}

