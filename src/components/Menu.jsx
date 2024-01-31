import styled from "styled-components";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logodark.png";
import menu from "../constants/menuItems.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
`;

export const Menu = ({ topic, isOpen, setIsOpen, topicHandler }) => {
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
          <div className={`flex items-center justify-between`}>
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
            <div className={`font-bold mr-4`} onClick={() => escapeHandler()}>
              esc
            </div>
          </div>
          {menu.map((menuItem) => (
            <a
              href={`#${menuItem.id}`}
              key={menuItem.id}
              className={`w-full p-4 border-b-[1px] border-[#eee] dark:border-[#C62128] \
                     ${
                       topic === menuItem.name.toLowerCase()
                         ? `bg-gradient-to-r from-[#1EEB31] to-[#AEFF02] \ 
                            dark:bg-gradient-to-br dark:from-[#A00000] dark:to-[#C62128]`
                         : ``
                     } \
                     `}
              onClick={(e) => topicHandler(e)}
            >
              {menuItem.name}
            </a>
          ))}
        </div>
        <div></div>
      </MenuBar>
    </>
  );
};
