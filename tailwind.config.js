import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.jsx", "./App.jsx", "./components/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: "rgb(215, 218, 47)",
          red: "rgb(215, 51, 40)",
          white: "rgb(255, 255, 255)",
          slate100: "rgb(227, 243, 253)",
          slate300: "rgb(154, 190, 213)",
          slate500: "rgb(107, 148, 168)",
          slate700: "rgb(78, 110, 126)",
          slate900: "rgb(18, 47, 63)",
          slate1000: "rgb(13, 38, 53)"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
