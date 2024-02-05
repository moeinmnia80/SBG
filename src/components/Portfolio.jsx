import portfolioImg from "../assets/images/portfolio.png";
import back from "../assets/images/back.jpg";
import { WindowMenuBar } from "./WindowMenuBar.jsx";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Element } from "react-scroll";

const WindowPortfolio = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Portfolio = () => {
  const project = useSelector((state) => state.project.project);

  return (
    <>
      <Element
        className={`relative w-full h-screen flex items-center justify-center px-4`}
        name={`portfolio`}
        id={`portfolio`}
      >
        <img
          src={`${back}`}
          alt="background"
          className={`absolute top-0 left-0 w-full h-full object-cover`}
        />
        <div className={`container relative flex items-center h-3/4`}>
          <div
            className={`absolute left-1/2 -translate-x-1/2 \ 
            w-1/2 -top-6 hover:-top-14 \
            sm:-top-12 sm:hover:-top-20 \
            md:w-1/4 md:-top-8 md:hover:-top-14 \
            lg:-top-10 lg:hover:-top-16
            xl:w-1/5 xl:-top-10 xl:hover:-top-16 \
            2xl:-top-8 2xl:hover:-top-16 \ 
            duration-500`}
          >
            <img
              src={`${portfolioImg}`}
              alt="portfolio"
              className={`to-up w-full h-full object-cover`}
            />
          </div>
          <WindowPortfolio className={`absolute w-full h-full`}>
            <div
              className={`to-up hidden md:flex absolute top-4 -left-4 \
              w-full h-full bg-[#eee] border-[1px] border-black rounded-md`}
            />
            <div
              className={`to-up relative w-full h-full border-[1px] border-black rounded-md overflow-hidden`}
            >
              <WindowMenuBar />
              <iframe className={`w-full h-full`} src={`${project.link}`}>
                isOpen
              </iframe>
            </div>
          </WindowPortfolio>
        </div>
      </Element>
    </>
  );
};
