import { NavBar } from "../components/NavBar.jsx";
import { useEffect, useState } from "react";
import themeValidation from "../helpers/theme.js";
import { Description } from "../components/Description.jsx";

export const WelcomePage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  useEffect(() => {
    themeValidation();
  }, [theme]);
  return (
    <>
      <div
        className={`container relative w-screen h-screen overflow-hidden flex flex-col items-center`}
      >
        <NavBar setTheme={setTheme} />
        <div className={`w-full h-full animate-fadeUp`}>
          <Description />
        </div>
      </div>
      <div className={`w-full h-screen  `}></div>
    </>
  );
};
