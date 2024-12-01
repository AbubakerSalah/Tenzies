/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        main:["#000"],
        grey:[" #F5F5F5"]
      },
      colors: {
        main:["#000"],
        grey:[" #F5F5F5"]
      }
    },
  },
  plugins: [],
}

