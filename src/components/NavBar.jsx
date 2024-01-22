import { useEffect, useState } from "react";
import menu from "../constants/menuItems.js";
import logo from "../assets/images/logo.png";
import { SunIcon } from "../assets/icons/SunIcon.jsx";
import { MoonIcon } from "../assets/icons/MoonIcon.jsx";
import { Link } from "react-router-dom";

export const NavBar = ({ setTheme }) => {
  const [topic, setTopic] = useState("");
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    setTopic("home");
  }, []);

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
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <nav
      className={`w-full h-full mt-4 ${
        isShow ? `` : `-translate-y-full`
      } transition-all duration-1000`}
    >
      <div className={`flex justify-between items-center`}>
        <Link
          to={`/`}
          className={`w-16 h-16 object-cover hover:scale-110 hover:rotate-180 transition-all \
           duration-500`}
        >
          <img src={logo} alt="logo" className={`w-full h-full`} />
        </Link>
        <ul
          className={`hidden md:flex items-center justify-center w-full h-12 text-sm`}
        >
          {menu.map((item) => (
            <li
              key={item.id}
              className={`grid place-items-center w-20 h-8 font-bold rounded-full\ 
              hover:text-black transition-all duration-500 cursor-pointer gap-4 ${
                topic === item.name.toLowerCase()
                  ? `bg-gradient-to-r from-[#1EEB31] to-[#AEFF02]`
                  : null
              }`}
              onClick={(e) => topicHandler(e)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className={`flex justify-center items-center`}>
          <div
            className={`relative w-14 h-7 bg-[#eee] rounded-full cursor-pointer`}
            onClick={(e) => themeSwitchHandler(e)}
          >
            <div
              className={`absolute top-1 ${
                isDark ? `left-8` : `left-1`
              } flex items-center justify-center w-5 h-5 shadow-xl \
                 bg-white rounded-full transition-all duration-500`}
            >
              {isDark ? (
                <MoonIcon style={`w-3 h-3 text-gray-400`} />
              ) : (
                <SunIcon style={`w-4 h-4 text-gray-400`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
