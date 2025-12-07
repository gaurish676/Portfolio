/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00df9a',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

