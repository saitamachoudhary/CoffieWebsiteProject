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
        'hero3-pattern': "url('./src/image/hero-01-free-img.jpg')",
        'ourMenuCoffeeForHome':"url('./src/image/bg-04-free-img.png')",
        'navbg-img':"url('./src/image/bg-0006-free-img.png')",
        'ourMenuCoffeeForHome2':"url('./src/image/bg-03-free-img.png')",
      },
    },
  },
  plugins: [],
}


// import bgimg from './src/image/bg-0006-free-img.png'

