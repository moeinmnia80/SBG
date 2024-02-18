import img from "../assets/images/sbg.png";
import { BlueBlobIcon } from "../assets/icons/BlueBlobIcon.jsx";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Description = () => {
  return (
    <>
      <BlueBlobIcon style={`absolute top-0 left-0 w-full h-full z-0`} />
      <div
        className={`text-sm \
        text-[#aaa] dark:text-secondary side-text`}
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
          className={`home-description-icon`}
        >
          <FaInstagram />
        </Link>
        <Link to={`https://www.linkedin.com/in/moeinmnia/`} className={``}>
          <FaLinkedinIn />
        </Link>
        <Link to={`/`} className={`home-description-icon`}>
          <FaYoutube />
        </Link>
        <Link
          to={`https://github.com/moeinmnia80`}
          className={`home-description-icon`}
        >
          <FaGithub />
        </Link>
      </div>
    </>
  );
};
