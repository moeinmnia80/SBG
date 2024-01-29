import { NavBar } from "./NavBar.jsx";
import { Description } from "./Description.jsx";

export const Home = () => {
  return (
    <>
      <div
        id={`home`}
        className={`container h-screen overflow-hidden flex flex-col items-center \
        justify-center`}
      >
        <NavBar />
        <div
          className={`flex items-center justify-between w-full h-full animate-fadeUp select-none p-2 sm:p-0`}
        >
          <Description />
        </div>
        <div data-topic="#home"></div>
      </div>
    </>
  );
};
