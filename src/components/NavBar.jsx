import { useState } from "react";
import menu from "../constants/menuItems.js";

export const NavBar = () => {
  const [topic, setTopic] = useState("home");
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);
  // set topic - NavBar items active mode
  const topicHandler = (e) => {
    const value = e.target.innerText.toLowerCase();
    setTopic(value);
  };
  return (
    <>
      <section className={`container select-none`}>
        <nav className={`flex justify-between items-center`}>
          <div>SBG</div>
          <ul className={`flex items-center justify-center`}>
            {menu.map((item) => (
              <li
                key={item.id}
                className={`grid place-items-center w-24 h-12 font-bold text-gray-400 \ 
              hover:text-black transition-all duration-500 cursor-pointer ${
                topic === item.name.toLowerCase() ? `text-black` : null
              }`}
                onClick={(e) => topicHandler(e)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className={`flex justify-center items-center`}>
            <div
              className={`relative w-14 h-7 bg-[#eee] rounded-full mr-2 cursor-pointer`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full`}
              ></div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
