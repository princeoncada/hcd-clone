/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.jsx",
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
        transitionProperty: {
            width: 'width'
        }
    },
  },
  plugins: [],
}

