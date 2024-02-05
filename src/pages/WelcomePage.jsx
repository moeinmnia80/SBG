import { AboutUs } from "../components/AboutUs.jsx";
import { Ribbon } from "../components/Ribbon.jsx";
import { Home } from "../components/Home.jsx";
import { Portfolio } from "../components/Portfolio.jsx";
import { Services } from "../components/Services.jsx";
import { Article } from "../components/Article.jsx";
import { useEffect } from "react";
import { observerToUp } from "../helpers/helpers.js";
export const WelcomePage = () => {
  useEffect(() => {
    document
      .querySelectorAll(".to-up")
      .forEach((section) => observerToUp.observe(section));
  }, [window.scrollY]);
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
