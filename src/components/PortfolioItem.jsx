/* eslint-disable react/prop-types */
import { CrossIcon } from "../assets/icons/CrossIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../features/project/projectSlice.js";

export const PortfolioItem = ({ item }) => {
  const project = useSelector((state) => state.project.project);
  const dispatch = useDispatch();
  return (
    <>
      <span
        className={`flex items-center w-max h-full border-[1px] border-black sm:py-1 px-2
         rounded-md cursor-pointer hover:bg-black hover:text-[#eee] duration-500 
         ${
           project.id === item.id
             ? `bg-gradient-to-br from-[#FE5858] to-[#EE9617] text-[#eee]`
             : `bg-transparent text-black`
         }`}
        onClick={() => dispatch(changeTab({ ...item }))}
      >
        {item.webTitle}
        <CrossIcon style={`w-3 h-3 ml-4`} />
      </span>
    </>
  );
};
