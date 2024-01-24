import { useEffect } from "react";
import themeValidation from "../helpers/theme.js";
import { AboutUs } from "../components/AboutUs.jsx";
import { Ribbon } from "../components/Ribbon.jsx";
import { useSelector } from "react-redux";
import { Home } from "../components/Home.jsx";
export const WelcomePage = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    themeValidation();
  }, [theme]);
  return (
    <>
      <Home />
      <Ribbon />
      <AboutUs />
    </>
  );
};
