import { IoLogoHtml5 } from "react-icons/io";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiApollographql,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiPwa,
  SiRedux,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { PiFramerLogoFill } from "react-icons/pi";
import img2 from "../assets/images/skills.png";

export const Skills = () => {
  return (
    <>
      <div className={`not-show flex justify-center w-full h-16 mt-8`}>
        <img
          src={img2}
          alt="skills"
          className={`w-max h-full object-contain`}
        />
      </div>
      <div
        className={`flex flex-wrap items-center justify-center gap-6 w-full px-7 mt-12 not-show`}
      >
        <IoLogoHtml5
          className={`w-8 h-max transition-all duration-300 hover:text-orange-500`}
        />
        <FaCss3Alt
          className={`w-8 h-max transition-all duration-300 hover:text-blue-500`}
        />
        <SiJavascript
          className={`w-8 h-max transition-all duration-300 hover:text-yellow-500`}
        />
        <FaGitAlt
          className={`w-8 h-max transition-all duration-300 hover:text-red-500`}
        />
        <FaGithub
          className={`w-8 h-max transition-all duration-300 hover:text-purple-500`}
        />
        <TbBrandNpm
          className={`w-8 h-max transition-all duration-300 hover:text-red-500`}
        />
        <FaSass
          className={`w-8 h-max transition-all duration-300 hover:text-pink-500`}
        />
        <FaReact
          className={`w-8 h-max transition-all duration-300 hover:text-blue-400`}
        />
        <SiVite
          className={`w-8 h-max transition-all duration-300 hover:text-purple-500`}
        />
        <GrGraphQl
          className={`w-8 h-max transition-all duration-300 hover:text-purple-800`}
        />
        <SiApollographql
          className={`w-8 h-max transition-all duration-300 hover:text-yellow-500`}
        />
        <SiRedux
          className={`w-8 h-max transition-all duration-300 hover:text-purple-700`}
        />
        <SiTailwindcss
          className={`w-8 h-max transition-all duration-300 hover:text-blue-500`}
        />
        <SiPwa
          className={`w-8 h-max transition-all duration-300 hover:text-purple-900`}
        />
        <SiNextdotjs className={`w-8 h-max`} />
        <SiTypescript
          className={`w-8 h-max transition-all duration-300 hover:text-blue-600`}
        />
        <SiMui
          className={`w-8 h-max transition-all duration-300 hover:text-blue-600`}
        />
        <PiFramerLogoFill className={`w-8 h-max`} />
        <SiThreedotjs className={`w-8 h-max`} />
        <FaGitlab
          className={`w-8 h-max transition-all duration-300 hover:text-orange-600`}
        />
      </div>
    </>
  );
};
