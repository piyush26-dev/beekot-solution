/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(1,91,91,0.2665441176470589) 0%, rgba(255,255,255,1) 21%)',
        'custom-radial': "radial-gradient(circle, #00cbcb, #009e9e, #007272, #004a4a, #002525)",
        "text-custom-radial": "radial-gradient(to right, #000000, #1e1e1e, #373737, #515151, #6d6d6d)",
        "customer-custom-linear": "linear-gradient(to right, #007777, #006262, #004e4e, #003a3a, #002828)",
      },
      clipPath: {
        customPolygon: "polygon(0 0, 100% 0, 100% 76%, 0 100%)",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        text: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        "primery": "#598C8C", // Copper Mineral Green
        "secondry": "#E8F4FF", // Kodama White
        "button-text": "#2F6F6F", //Lakelike
        "text-black": "#0F0E0E", // Black Sheep
        "black-heading": "#111D15", // Nightmare
        "heading-color": "#015B5B",
        "input-bg": "#BFBFBF",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
}
