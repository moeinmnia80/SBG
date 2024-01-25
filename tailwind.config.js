/** @type {import('tailwindcss').Config} */

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
      backgroundImage: {
        ribbon: `url(src/assets/images/ribbon-text.png)`,
      },
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
