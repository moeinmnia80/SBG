/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        sm: "350px",
        md: "650px",
        lg: "900px",
        xl: "1100px",
        "2xl": "1300px",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["IranSansX"],
      },
      backgroundImage: {},
      colors: {},
    },
  },
  plugins: [],
};
