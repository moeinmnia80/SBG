import { useEffect, useRef, useState } from "react";
import menu from "../constants/menuItems.js";
import logo from "../assets/images/logo.png";
import { SunIcon } from "../assets/icons/SunIcon.jsx";
import { MoonIcon } from "../assets/icons/MoonIcon.jsx";
import { Link } from "react-router-dom";
import { tabHandler } from "../helpers/helpers.js";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice.js";
import { ThemeButton } from "./ThemeButton.jsx";

export const NavBar = () => {
  const [topic, setTopic] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const nav = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsShow(true);
    setTopic("home");
  }, []);

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

  // set topic - NavBar items active mode
  const topicHandler = (e) => {
    const value = e.target.innerText.toLowerCase();
    setTopic(value);
  };
  // change theme
  const themeSwitchHandler = (event) => {
    setIsDark((isDark) => !isDark);
    if (isDark) {
      localStorage.setItem("theme", "light");
      dispatch(changeTheme("light"));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(changeTheme("dark"));
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full h-max bg-white ${
        isShow ? `` : `-translate-y-full`
      } transition-all duration-1000 z-50`}
      ref={nav}
    >
      <div
        className={`container flex justify-between items-center pr-6 sm:p-0`}
      >
        <Link
          to={`/`}
          className={`w-16 h-16 object-cover hover:scale-110 hover:rotate-180 transition-all \
           duration-500`}
        >
          <img src={logo} alt="logo" className={`w-full h-full`} />
        </Link>
        <ul
          className={`relative hidden md:flex items-center justify-center w-max h-12 text-sm`}
        >
          <span
            className={`absolute ${tabHandler(
              topic,
            )} w-[calc(100%/5)] h-8 -z-50  shadow-sm\
             bg-gradient-to-r from-[#1EEB31] to-[#AEFF02] rounded-full transition-all duration-500`}
          ></span>
          {menu.map((item) => (
            <li
              key={item.id}
              className={`grid place-items-center w-20 h-8 font-bold rounded-full\ 
              hover:text-black transition-all duration-500 cursor-pointer gap-4 `}
              id={item.id}
              onClick={(e) => topicHandler(e)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ThemeButton isDark={isDark} themeSwitchHandler={themeSwitchHandler} />
      </div>
    </nav>
  );
};
