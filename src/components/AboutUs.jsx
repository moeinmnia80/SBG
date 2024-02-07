import img1 from "../assets/images/aboutsbg.png";
import { useEffect } from "react";
import { observer } from "../helpers/helpers.js";
import { ArticleAboutUs } from "./ArticleAboutUs.jsx";
import { Skills } from "./Skills.jsx";
import { Element } from "react-scroll";
export const AboutUs = () => {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".not-show");
    hiddenElement.forEach((el) => observer.observe(el));
  }, [window.scrollY]);

  return (
    <>
      <Element
        className={`container min-h-svh flex items-center justify-center px-8`}
        name={`aboutus`}
        id={`aboutus`}
      >
        <div className={`flex flex-col text-center`}>
          <div>
            <div
              className={`not-show flex flex-col items-center justify-center`}
            >
              <img
                src={`${img1}`}
                alt="sbg about us"
                className={`w-full md:w-1/2`}
              />
            </div>
            <p
              className={`not-show text-black text-sm mt-2  px-8 md:p-0 dark:text-[#eee]`}
            >
              Welcome to the SBG Programming Group website! We are a team of
              Front-End developers who passionately pursue our ideals to create
              extraordinary web experiences. Here, our team are eager to share
              our knowledge and skills with you.
            </p>
          </div>
          <ArticleAboutUs />
          <Skills />
        </div>
      </Element>
    </>
  );
};
