import img from "../assets/images/sbg.png";
import { BlueBlobIcon } from "../assets/icons/BlueBlobIcon.jsx";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Description = () => {
  return (
    <>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 `}
      >
        <img
          src={img}
          alt="sbg-logo"
          className={`w-full h-full drop-shadow-xl object-contain`}
        />
      </div>
      <BlueBlobIcon style={`absolute top-0 left-0 w-full h-full -z-50`} />
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 text-sm \
        text-gray-400 side-text`}
      >
        front-end developer - SBG
      </div>
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 side-icon flex gap-4`}
      >
        <Link
          to={`https://www.instagram.com/scorpionbitesgroup`}
          className={`hover:text-[#0BBDBA] transition-all duration-500`}
        >
          <FaInstagram />
        </Link>
        <Link
          to={`/`}
          className={`hover:text-[#0BBDBA] transition-all duration-500`}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to={`/`}
          className={`hover:text-[#0BBDBA] transition-all duration-500`}
        >
          <FaYoutube />
        </Link>
      </div>
    </>
  );
};
