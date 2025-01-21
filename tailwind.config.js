/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', // Custom breakpoint for small devices (phones)
        'sm': '640px', // Default sm
        'md': '768px', // Default md
        'lg': '1024px', // Default lg
        'xl': '1280px', // Default xl
        '2xl': '1536px', // Default 2xl
        '3xl': '1600px', // Custom breakpoint for larger screens
        '4xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}