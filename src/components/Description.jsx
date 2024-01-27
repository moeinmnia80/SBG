import img from "../assets/images/sbg.png";
import { BlueBlobIcon } from "../assets/icons/BlueBlobIcon.jsx";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Description = () => {
  return (
    <>
      <BlueBlobIcon style={`absolute top-0 left-0 w-full h-full z-0`} />
      <div
        className={`text-sm \
        text-[#aaa] dark:text-[#eee] side-text`}
      >
        front-end developer - SBG
      </div>
      <div className={`grid place-items-center w-3/4 h-3/4 `}>
        <img
          src={img}
          alt="sbg-logo"
          className={`w-full h-full drop-shadow-xl object-contain`}
        />
      </div>
      <div className={`relative side-icon flex gap-4 `}>
        <Link
          to={`https://www.instagram.com/scorpionbitesgroup`}
          className={`text-black hover:text-[#1EEB31] dark:text-[#eee] dark:hover:text-[#C62128] transition-all duration-500`}
        >
          <FaInstagram />
        </Link>
        <Link
          to={`/`}
          className={`text-black hover:text-[#1EEB31] dark:text-[#eee] dark:hover:text-[#C62128] transition-all duration-500`}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to={`/`}
          className={`text-black hover:text-[#1EEB31] dark:text-[#eee] dark:hover:text-[#C62128] transition-all duration-500`}
        >
          <FaYoutube />
        </Link>
      </div>
    </>
  );
};
