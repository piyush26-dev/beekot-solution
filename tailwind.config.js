/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        text: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        "primery": "#598C8C", // Copper Mineral Green
        "secondry": "#E8F4FF", // Kodama White
        "button-text": "#2F6F6F", //Lakelike
        "text-black": "#0F0E0E", // Black Sheep
        "black-heading": "#111D15" // Nightmare
      },
    },
  },
  plugins: [],
}
