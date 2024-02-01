export const ServiceCard = ({ service }) => {
  return (
    <div
      className={`group/cart relative w-full h-full before:hidden\
       sm:before:inline-block before:content-['\\2192'] before:absolute \
       before:w-max before:h-max before:text-xl \
       before:top-1/2 before:-translate-y-1/2 before:-left-8 dark:before:text-white `}
    >
      <span
        className={`absolute grid place-items-center w-24 h-8 \
         -top-6 left-1/2 -translate-x-1/2 border-[1px] border-black \
         bg-black dark:bg-[#C62128] text-white rounded-md text-sm`}
      >
        {service.id < 10 && 0}
        {service.id}
      </span>
      <div
        className={`absolute w-full h-full top-2 -left-2 border-[1px] border-black rounded-md bg-[#eee]`}
      ></div>
      <div
        className={`relative w-full h-full border-[1px] border-black rounded-md bg-white overflow-hidden`}
      >
        <h2
          className={`grid place-items-center h-full text-center text-[12px] font-bold \
           border-b-[1px] border-black p-2 bg-white   \
           dark:bg-[#eee] duration-500 sm:group-hover/services:visible \
           rounded-t-md sm:group-hover/cart:h-16 sm:group-hover/cart:bg-[#eee] `}
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
