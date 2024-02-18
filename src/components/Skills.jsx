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
  SiRedux,
  SiTailwindcss,
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
          src={`${img2}`}
          alt="skills"
          className={`w-max h-full object-contain`}
        />
      </div>
      <div
        className={`flex flex-wrap items-center justify-center gap-6 w-full mt-12 mb-8 not-show`}
      >
        <IoLogoHtml5
          className={`aboutus-skills-icon hover:text-orange-500 dark:hover:text-orange-500`}
        />
        <FaCss3Alt
          className={`aboutus-skills-icon hover:text-blue-500 dark:hover:text-blue-500`}
        />
        <SiJavascript
          className={`aboutus-skills-icon hover:text-yellow-500 dark:hover:text-yellow-500`}
        />
        <FaGitAlt
          className={`aboutus-skills-icon hover:text-red-500 dark:hover:text-red-500`}
        />
        <FaGithub
          className={`aboutus-skills-icon hover:text-purple-500 dark:hover:text-purple-500`}
        />
        <FaGitlab
          className={`aboutus-skills-icon hover:text-orange-600 dark:hover:text-orange-600`}
        />
        <TbBrandNpm
          className={`aboutus-skills-icon hover:text-red-500 dark:hover:text-red-500`}
        />
        <FaSass
          className={`aboutus-skills-icon hover:text-pink-500 dark:hover:text-pink-500`}
        />
        <FaReact
          className={`aboutus-skills-icon hover:text-blue-400 dark:hover:text-blue-400`}
        />
        <SiVite
          className={`aboutus-skills-icon hover:text-purple-500 dark:hover:text-purple-500`}
        />
        <GrGraphQl
          className={`aboutus-skills-icon hover:text-purple-800 dark:hover:text-purple-800`}
        />
        <SiApollographql
          className={`aboutus-skills-icon hover:text-yellow-500 dark:hover:text-yellow-500`}
        />
        <SiRedux
          className={`aboutus-skills-icon hover:text-purple-700 dark:hover:text-purple-700`}
        />
        <SiTailwindcss
          className={`aboutus-skills-icon hover:text-blue-400 dark:hover:text-blue-400`}
        />
        <SiMui
          className={`aboutus-skills-icon hover:text-blue-600 dark:hover:text-blue-600`}
        />
        <PiFramerLogoFill className={`w-8 h-max dark:text-[#eee]`} />
      </div>
    </>
  );
};
