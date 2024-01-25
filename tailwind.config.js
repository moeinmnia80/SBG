/** @type {import('tailwindcss').Config} */
import ribbonImg from "./src/assets/images/ribbon.png";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        sm: "450px",
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
      backgroundSize: {
        500: "500%",
      },
      animation: {
        fadeUp: `fadeUp 1.5s linear`,
        loadingBar: `loadingBar 80s linear infinite`,
      },
    },
  },
  plugins: [],
};
