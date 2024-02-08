import styled from "styled-components";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logodark.png";
import menu from "../constants/menuItems.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { MoonIcon } from "../assets/icons/MoonIcon.jsx";
import { SunIcon } from "../assets/icons/SunIcon.jsx";

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: all 450ms ease-in-out;
  z-index: 100;
`;

export const Menu = ({
  topic,
  isOpen,
  isDark,
  setIsOpen,
  topicHandler,
  themeSwitchHandler,
}) => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    const exitHandler = (e) => {
      e.key === "Escape" && setIsOpen(false);
    };
    document.addEventListener("keydown", (e) => exitHandler(e));
    return () => {
      document.removeEventListener("keydown", exitHandler);
    };
  }, []);

  const menuTopicHandler = (e) => {
    topicHandler(e);
    setIsOpen(false);
  };

  const escapeHandler = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MenuBar
        className={`${isOpen ? `left-0` : `-left-full`}
        dark:bg-[#1a1a1d]    `}
      >
        <div className={`flex flex-col w-full`}>
          <div
            className={`flex items-center justify-between border-b-[1px] border-[#ccc] \
            dark:border-[#C62128]`}
          >
            {theme === "light" ? (
              <img src={`${logo}`} alt="logo" className={`w-16 h-16`} />
            ) : (
              <img src={`${logoDark}`} alt="logo" className={`w-16 h-16`} />
            )}
            <h1
              className={`absolute left-1/2 -translate-x-1/2 text-sm dark:text-[#999]`}
            >
              ScorpionBitesGroup
            </h1>
            <div
              className={`font-bold mr-4 hover:text-[#1EEB31] dark:text-[#C62128] duration-500`}
              onClick={() => escapeHandler()}
            >
              esc
            </div>
          </div>
          {menu.map((menuItem) => (
            <Link
              to={`${menuItem.id}`}
              smooth={true}
              duration={1000}
              key={menuItem.id}
              className={`w-full p-4 border-b-[1px] border-[#ccc] dark:border-[#C62128] \
                     ${
                       topic === menuItem.name.toLowerCase()
                         ? `bg-gradient-to-r from-[#1EEB31] to-[#AEFF02] \ 
                            dark:bg-gradient-to-br dark:from-[#A00000] dark:to-[#C62128]`
                         : ``
                     } \
                     `}
              onClick={(e) => menuTopicHandler(e)}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
        <div className={`flex justify-between items-center w-full p-4`}>
          <p className={``}>Dark Mode</p>
          <div
            className={`relative w-14 h-7 bg-[#eee] dark:bg-[#C62128] rounded-full cursor-pointer`}
            onClick={(e) => themeSwitchHandler(e)}
          >
            <div
              className={`absolute top-1 ${
                isDark ? `left-8` : `left-1`
              } flex items-center justify-center w-5 h-5 shadow-xl \
                 bg-white dark:bg-[#1a1a1d] rounded-full transition-all duration-500`}
            >
              {isDark ? (
                <MoonIcon style={`w-3 h-3 text-gray-400`} />
              ) : (
                <SunIcon style={`w-4 h-4 text-gray-400`} />
              )}
            </div>
          </div>
        </div>
      </MenuBar>
    </>
  );
};
