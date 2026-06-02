/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F8F8F8', // 60%
          navy: '#071E4A',  // 30%
          gold: '#C89B4A',  // 10%
          dark: '#030D22',  // Accent Dark for footers
        }
      },
      boxShadow: {
        'float': '0 20px 40px -15px rgba(7, 30, 74, 0.12), 0 15px 20px -20px rgba(7, 30, 74, 0.15)',
        'float-hover': '0 30px 60px -10px rgba(200, 155, 74, 0.15), 0 20px 30px -15px rgba(7, 30, 74, 0.2)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
