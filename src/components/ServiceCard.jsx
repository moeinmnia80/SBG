import { RightArrow } from "../assets/icons/RightArrow.jsx";

export const ServiceCard = ({ service }) => {
  return (
    <div className={` group/cart relative w-full h-full z-20`}>
      <span
        className={`absolute grid place-items-center w-24 h-8 \
         -top-6 left-1/2 -translate-x-1/2 border-[1px] border-[#1a1a1d] \
         bg-[#1a1a1d] dark:bg-[#ffffff22] dark:border-[#eee] font-bold text-white rounded-md text-sm`}
      >
        {service.id < 10 && 0}
        {service.id}
      </span>
      <RightArrow
        style={`hidden sm:inline-block absolute -left-9 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1a1a1d] \
        dark:text-white`}
      />
      <div
        className={`absolute w-full h-full top-2 -left-2 \
        border-[1px] border-[#1a1a1d] rounded-md bg-[#eee] duration-300 \ 
        dark:bg-[#ffffff33] dark:border-[#ffffff55]`}
      />
      <div
        className={`relative w-full h-full border-[1px] border-[#1a1a1d] \
        rounded-md bg-white overflow-hidden`}
      >
        <h2
          className={`grid place-items-center h-full text-center text-[12px] font-bold \
           group-hover/cart:border-b-[1px] group-hover/cart:border-[#1a1a1d] p-2 bg-white   \
           dark:bg-[#eee] duration-500 group-hover/services:visible \
           rounded-t-md group-hover/cart:h-16 group-hover/cart:bg-[#eee] `}
        >
          {service.title}
        </h2>
        <p
          className={`grid place-items-center h-0 text-[11px] text-justify p-4 `}
        >
          {service.text}
        </p>
      </div>
    </div>
  );
};
