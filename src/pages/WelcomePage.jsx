import { useEffect } from "react";
import themeValidation from "../helpers/theme.js";
import { AboutUs } from "../components/AboutUs.jsx";
import { Ribbon } from "../components/Ribbon.jsx";
import { useSelector } from "react-redux";
import { Home } from "../components/Home.jsx";
import { Portfolio } from "../components/Portfolio.jsx";
import { Services } from "../components/Services.jsx";
import { Article } from "../components/Article.jsx";
export const WelcomePage = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    themeValidation();
  }, [theme]);
  return (
    <section className={`bg-white dark:bg-[#1a1a1d]`}>
      <Home />
      <Ribbon />
      <AboutUs />
      <Portfolio />
      <Services />
      <Article />
    </section>
  );
};
