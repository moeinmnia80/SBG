import portfolioImg from "../assets/images/portfolio.png";
import back from "../assets/images/back.jpg";
import { observerFadeUp, observerWin } from "../helpers/helpers.js";
import { useEffect } from "react";
import { WindowMenuBar } from "./WindowMenuBar.jsx";
import { useSelector } from "react-redux";
export const Portfolio = () => {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".portfolio");
    hiddenElement.forEach((el) => observerFadeUp.observe(el));
    document
      .querySelectorAll(".window")
      .forEach((section) => observerWin.observe(section));
  }, [window.scrollY]);

  const project = useSelector((state) => state.project.project);

  return (
    <>
      <div
        className={`relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden`}
        id={`portfolio`}
      >
        <img
          src={`${back}`}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover`}
        />
        <div
          className={`absolute w-1/2 top-20 sm:top-16 sm:hover:top-10 md:w-1/3 lg:w-1/4 xl:w-1/5 xl:hover:top-8 portfolio hover:top-14`}
        >
          <img
            src={`${portfolioImg}`}
            alt="portfolio"
            className={`w-full h-full object-cover`}
          />
        </div>
        <span
          className={`hidden md:flex window container absolute top-[calc(50%+1rem)] -translate-y-1/2 left-[calc(50%-1rem)] -translate-x-1/2  \
          mt-4 w-full h-3/4 bg-[#eee] border-[1px] border-black rounded-md`}
        ></span>
        <div
          className={`window container w-full h-3/4 border-[1px] border-black mt-8 rounded-md overflow-hidden z-10`}
        >
          <WindowMenuBar />
          <iframe className={`w-full h-full`} src={`${project.link}`}>
            isOpen
          </iframe>
        </div>
      </div>
    </>
  );
};
