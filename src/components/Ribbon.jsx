import ribbonImg from "../assets/images/ribbon.png";
export const Ribbon = () => {
  return (
    <div
      className={`w-full h-12 bg-[#000] dark:bg-[#C62128] -skew-x-2 -rotate-2 my-12\
         bg-contain bg-ribbon-white an size-500 animate-loadingBar`}
      style={{ backgroundImage: `url("${ribbonImg}")` }}
    ></div>
  );
};
