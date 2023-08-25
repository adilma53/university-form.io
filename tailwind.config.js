/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gigachad' : ['Cinzel', 'serif'],
        '3adli' : ['ADLaM Display', 'sans-serif'],
      },
      backgroundImage: {
        'book': "url('/src/Assets/book-pic.jpg')",
      },
    },
  },
  plugins: [],
}