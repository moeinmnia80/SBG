import portfolioImg from "../assets/images/portfolio.png";
import { observer, observerFadeUp } from "../helpers/helpers.js";
import { useEffect } from "react";
export const Portfolio = () => {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".portfolio");
    hiddenElement.forEach((el) => observerFadeUp.observe(el));
  }, [window.scrollY]);

  return (
    <>
      <div
        className={`w-full h-screen flex flex-col items-center justify-center animate-fadeUp`}
        id={`portfolio`}
      >
        <div className={`portfolio`}>
          <img
            src={portfolioImg}
            alt="portfolio"
            className={`w-full h-full object-cover`}
          />
        </div>
        <div className={`w-full h-full flex`}></div>
      </div>
    </>
  );
};
