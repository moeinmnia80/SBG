import { LeftArrow } from "../assets/icons/LeftArrow.jsx";
import { HomeIcon } from "../assets/icons/HomeIcon.jsx";
import { Link, useNavigate } from "react-router-dom";
import { ThemeButton } from "./ThemeButton.jsx";
import { useState } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

export const NavbarBlog = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );
  const navigate = useNavigate();
  return (
    <>
      <nav
        className={`sticky top-0 flex items-center justify-center w-full h-20 border-b-[1px] border-[#00000011] \ 
        bg-[#ffffff22] dark:bg-[#00000022] dark:border-[#ffffff22] backdrop-blur-xl pr-8 pl-6 sm:p-0 z-20`}
      >
        <section className={`container flex items-center justify-between`}>
          <div className={`flex items-center justify-center w-max`}>
            <button
              onClick={() => navigate(-1)}
              className={`hidden sm:flex p-2 hover:bg-[#eee] rounded-full duration-500 \
              dark:hover:bg-[#ffffff22]`}
            >
              <LeftArrow style={`w-5 h-5`} />
            </button>
            <Link
              to={`/`}
              className={`flex p-2 hover:bg-[#eee] rounded-full ml-2 duration-500 \ 
              dark:hover:bg-[#ffffff22]`}
            >
              <HomeIcon style={`w-5 h-5`} />
            </Link>
            <Breadcrumbs className={`hidden sm:flex ml-2 mt-1`}>
              <BreadcrumbItem>
                <Link to={`/`}>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Articles</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div className={`flex gap-x-4`}>
            <Link
              to={`articles`}
              className={`flex items-center justify-center`}
            >
              <h1 className={`font-bold`}>SBG</h1>
              <span className={`text-sm text-[#888]`}>Article</span>
            </Link>
            <ThemeButton isDark={isDark} setIsDark={setIsDark} style={`flex`} />
          </div>
        </section>
      </nav>
    </>
  );
};
