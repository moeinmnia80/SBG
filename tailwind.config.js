/** @type {import('tailwindcss').Config} */

// tailwind.config.js
import { nextui } from "@nextui-org/theme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|snippet|code|input|spinner).js",
  ],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        sm: "400px",
        md: "600px",
        lg: "800px",
        xl: "1000px",
        "2xl": "1200px",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["IranSansX"],
      },
      backgroundImage: {},
      colors: {
        primary: `#1a1a1d`,
        secondary: `#eee`,
        third: `#C62128`,
      },
      backgroundSize: {
        500: "500%",
      },
      animation: {
        fadeUp: `fadeUp 1.5s linear`,
        loadingBar: `loadingBar 80s linear infinite`,
      },
    },
  },
  plugins: [nextui()],
};
