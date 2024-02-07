import { NavBar } from "./NavBar.jsx";
import { Description } from "./Description.jsx";
import { Element } from "react-scroll";

export const Home = () => {
  return (
    <>
      <Element
        name={`home`}
        id={`home`}
        className={`relative container h-screen overflow-hidden flex flex-col items-center \
        justify-center`}
      >
        <div
          className={`flex items-center justify-between w-full h-full animate-fadeUp select-none px-8`}
        >
          <Description />
        </div>
      </Element>
    </>
  );
};
