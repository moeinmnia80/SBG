export const ServiceCard = ({ service }) => {
  return (
    <div className={`group/cart relative w-full h-full`}>
      <span
        className={`absolute flex w-full h-full \
        top-2 -left-2 border-[1px] border-[#1a1a1d] \
        bg-[#1a1a1d] dark:bg-[#ffffff22] dark:border-[#eee] rounded-md`}
      />
      <div
        className={`flex relative w-full h-full border-1 border-[#1a1a1d] \
        rounded-md bg-white overflow-hidden dark:bg-secondary`}
      >
        <div className={`services-card-selector-right`} />
        <div
          className={`flex items-center w-1/3 h-full border-r-2 border-primary p-2`}
        >
          <h2 className={`text-primary text-xs font-bold`}>{service.title}</h2>
        </div>
        <p className={`flex items-center w-full text-[#888] text-xs p-2`}>
          {service.text}
        </p>
        <div className={`services-card-selector-left`} />
      </div>
    </div>
  );
};
