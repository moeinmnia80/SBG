import { NavBar } from "./NavBar.jsx";
import { Description } from "./Description.jsx";

export const Home = () => {
  return (
    <>
      <div
        id={`home`}
        className={`container full-screen-section overflow-hidden flex flex-col items-center`}
      >
        <NavBar />
        <div className={`w-full h-full animate-fadeUp select-none`}>
          <Description />
        </div>
        <div data-topic="#home"></div>
      </div>
    </>
  );
};
