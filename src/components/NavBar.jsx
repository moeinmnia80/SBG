import { useEffect, useRef, useState } from "react";
import menu from "../constants/menuItems.js";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logodark.png";
import { Link } from "react-scroll";
import { scrollHandler, tabHandler } from "../helpers/helpers.js";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice.js";
import { ThemeButton } from "./ThemeButton.jsx";
import { BarsIcon } from "../assets/icons/BarsIcon.jsx";
import { Menu } from "./Menu.jsx";

export const NavBar = () => {
  const [topic, setTopic] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const nav = useRef();
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsShow(true);
    setTopic("home");
  }, []);

  // scrolling when menubar is show, disabled
  useEffect(() => {
    isOpen && document.body.classList.add(`menu-bar`);
    return () => {
      isOpen && document.body.classList.remove(`menu-bar`);
    };
  }, [isOpen]);

  useEffect(() => {
    theme === "dark" ? setIsDark(true) : setIsDark(false);
  }, [theme]);
  let prevScrollpos = window.scrollY;
  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      nav.current.style.top = "0";
    } else {
      nav.current.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler(setTopic));

    return () => {
      window.removeEventListener("scroll", () => scrollHandler(setTopic));
    };
  }, []);

  // set topic - NavBar items active mode
  const topicHandler = (e) => {
    const value = e.target.innerText.toLowerCase();
    setTopic(value);
  };
  // change theme
  const themeSwitchHandler = () => {
    setIsDark((isDark) => !isDark);
    if (isDark) {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full h-max bg-white ${
        isShow ? `` : `-translate-y-full`
      } transition-all duration-1000 z-50 dark:bg-[#1a1a1d] \ 
      border-b-[1px] border-[#eee] dark:border-[#ffffff22]`}
      ref={nav}
    >
      <div
        className={`container flex justify-between items-center dark:text-white pr-4`}
      >
        <Link
          to={`/`}
          className={`w-16 h-16 object-cover sm:hover:scale-110 sm:hover:rotate-180 transition-all \
           duration-500`}
        >
          {theme === "light" ? (
            <img src={`${logo}`} alt="logo" className={`w-full h-full`} />
          ) : (
            <img src={`${logoDark}`} alt="logo" className={`w-full h-full`} />
          )}
        </Link>
        <ul
          className={`relative hidden md:flex items-center justify-center w-max h-12 text-sm`}
        >
          <span
            className={`absolute ${tabHandler(
              topic,
            )} w-[calc(100%/5)] h-8 -z-50  shadow-sm\
             bg-gradient-to-r from-[#1EEB31] to-[#AEFF02] \ 
             dark:bg-gradient-to-br dark:from-[#A00000] dark:to-[#C62128] \
             rounded-full transition-all duration-500`}
          ></span>
          {menu.map((item) => (
            <Link
              to={`${item.id}`}
              smooth={true}
              duration={1000}
              key={item.id}
              className={`grid place-items-center w-20 h-8 font-bold rounded-full\ 
              hover:text-black dark:text-white transition-all duration-500 cursor-pointer gap-4 `}
              onClick={(e) => topicHandler(e)}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className={`flex w-max h-full`}>
          <button
            className={`relative w-6 h-6 sm:hidden`}
            onClick={() => setIsOpen(true)}
          >
            <BarsIcon style={`w-6 h-6 text-black dark:text-white`} />
          </button>
          <Menu
            topic={topic}
            isOpen={isOpen}
            isDark={isDark}
            setIsOpen={setIsOpen}
            topicHandler={topicHandler}
            themeSwitchHandler={themeSwitchHandler}
          />
          <ThemeButton
            isDark={isDark}
            themeSwitchHandler={themeSwitchHandler}
          />
        </div>
      </div>
    </nav>
  );
};
