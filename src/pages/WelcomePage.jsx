import { useEffect } from "react";
import themeValidation from "../helpers/theme.js";
import { AboutUs } from "../components/AboutUs.jsx";
import { Ribbon } from "../components/Ribbon.jsx";
import { useSelector } from "react-redux";
import { Home } from "../components/Home.jsx";
import { Portfolio } from "../components/Portfolio.jsx";
import { scrollVar } from "../helpers/helpers.js";
export const WelcomePage = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    themeValidation();
  }, [theme]);
  useEffect(() => {
    window.addEventListener("scroll", scrollVar);
    window.addEventListener("resize", scrollVar);

    return () => {
      window.removeEventListener("scroll", scrollVar);
      window.removeEventListener("resize", scrollVar);
    };
  }, []);
  return (
    <section className={`dark:bg-[#1a1a1d]`}>
      <Home />
      <Ribbon />
      <AboutUs />
      <Portfolio />
    </section>
  );
};
