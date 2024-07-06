/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/images/bg-0001-free-img.png')",
        'hero2-pattern': "url('./public/images/bg-005-free-img.png')",
        'hero3-pattern': "url('./public/images/hero-01-free-img.png')",
      }
    },
  },
  plugins: [],
}


