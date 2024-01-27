import { MoonIcon } from "../assets/icons/MoonIcon.jsx";
import { SunIcon } from "../assets/icons/SunIcon.jsx";

export const ThemeButton = ({ isDark, themeSwitchHandler }) => {
  return (
    <>
      <div className={`hidden sm:flex justify-center items-center`}>
        <div
          className={`relative w-14 h-7 bg-[#eee] dark:bg-[#C62128] rounded-full cursor-pointer`}
          onClick={(e) => themeSwitchHandler(e)}
        >
          <div
            className={`absolute top-1 ${
              isDark ? `left-8` : `left-1`
            } flex items-center justify-center w-5 h-5 shadow-xl \
                 bg-white dark:bg-[#1a1a1d] rounded-full transition-all duration-500`}
          >
            {isDark ? (
              <MoonIcon style={`w-3 h-3 text-gray-400`} />
            ) : (
              <SunIcon style={`w-4 h-4 text-gray-400`} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
