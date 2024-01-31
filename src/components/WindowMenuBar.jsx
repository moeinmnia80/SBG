import { MinimizeIcon } from "../assets/icons/MinimizeIcon.jsx";
import { MagnificationIcon } from "../assets/icons/MagnificationIcon.jsx";
import { CrossIcon } from "../assets/icons/CrossIcon.jsx";
import portfolioItems from "../constants/portfolioItems.js";
import { PortfolioItem } from "./PortfolioItem.jsx";
import { PlusIcon } from "../assets/icons/PlusIcon.jsx";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const WindowMenuBar = () => {
  const project = useSelector((state) => state.project.project);

  return (
    <>
      <div
        className={`flex items-center w-full h-12 border-b-[1px] border-black bg-[#eee]`}
      >
        <div
          className={`w-8 h-8 grid place-items-center border-[1px] border-black ml-2 rounded-md`}
        >
          S
        </div>
        <div
          className={`flex items-center gap-4 w-[calc(100%-6rem)] h-8 text-sm mx-3 sm:m-0 sm:pl-4 overflow-x-scroll `}
        >
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
          <span
            className={`hidden sm:flex items-center w-max h-full border-l-[1px] border-black`}
          >
            <PlusIcon style={`w-4 h-4 ml-2`} />
          </span>
        </div>
        <div
          className={`flex items-center justify-evenly w-32 h-full font-bold`}
        >
          <Link
            className={`bottom-4 right-4 w-4 h-4 mr-4`}
            to={project.gitLink}
          >
            <FaGithub
              className={`w-full h-full hover:text-purple-800 duration-300`}
            />
          </Link>
          <MinimizeIcon style={`w-4 h-4`} />
          <MagnificationIcon style={`w-4 h-4`} />
          <CrossIcon style={`w-4 h-4`} />
        </div>
      </div>
    </>
  );
};
