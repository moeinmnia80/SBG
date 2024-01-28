import portfolioImg from "../assets/images/portfolio.png";
import { observerFadeUp } from "../helpers/helpers.js";
import { useEffect } from "react";
import portfolioItems from "../constants/portfolioItems.js";
import { Link } from "react-router-dom";
export const Portfolio = () => {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".portfolio");
    hiddenElement.forEach((el) => observerFadeUp.observe(el));
  }, [window.scrollY]);

  return (
    <>
      <div
        className={`w-full h-screen flex flex-col items-center justify-center`}
        id={`portfolio`}
      >
        <div className={`relative portfolio`}>
          <img
            src={portfolioImg}
            alt="portfolio"
            className={`w-full h-full object-cover`}
          />
          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2 \ 
            bg-gradient-to-r from-[#1EEB31] to-[#AEFF02] \ 
            dark:bg-gradient-to-r dark:from-[#A00000] dark:to-[#C62128]
            rounded-md`}
          ></span>
        </div>
        <div className={`container w-full h-3/4 py-4`}>
          {/*{portfolioItems.map((item) => (*/}
          {/*  <Link to={item.link} key={item.id} className={`w-64 h-72`}>*/}
          {/*    <img*/}
          {/*      src={item.img}*/}
          {/*      alt="project image"*/}
          {/*      className={`w-full h-full object-cover`}*/}
          {/*    />*/}
          {/*  </Link>*/}
          {/*))}*/}
        </div>
      </div>
    </>
  );
};
