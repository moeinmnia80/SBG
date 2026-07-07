import { PreviewIcon } from "../assets/icons/PreviewIcon.jsx";
import { SendIcon } from "../assets/icons/SendIcon.jsx";
import { useEffect } from "react";
import useClickOutside from "../helpers/useClickOutside.js";
import styled from "styled-components";

const Dropdown = styled.div`
  position: absolute;
  display: flex;
  align-content: center;
  justify-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
export const DropDown = ({ setIsOpen }) => {
  useEffect(() => {
    const escapeHandler = (e) => {
      e.key === "Escape" && setIsOpen(false);
    };
    document.addEventListener("keydown", (e) => escapeHandler(e));
    return () => {
      document.removeEventListener("keydown", escapeHandler);
    };
  }, []);
  // when click outside close the modal or dropDown
  const domNode = useClickOutside(() => setIsOpen(false));
  return (
    <>
      <Dropdown
        className={`bottom-[calc(100%+.5rem)] right-0
                bg-white rounded-md  
                p-2 border-[1px] border-[#00000022] 
                dark:bg-[#1a1a1d] dark:border-[#ffffff33]`}
        ref={domNode}
      >
        <button
          className={`flex items-center w-56 p-3 hover:bg-[#eee] 
                  border-[1px] border-white hover:border-[#00000022] 
                  rounded-md duration-500 text-left text-[#1a1a1d] 
                  dark:border-[#1a1a1d] dark:hover:bg-[#ffffff22] dark:text-[#eee] \
                   dark:hover:border-[#ffffff44]`}
          onClick={() => setIsOpen(false)}
        >
          <PreviewIcon style={`w-6 h-6 mr-4 text-[#1a1a1d] dark:text-[#eee]`} />
          <span className={`w-full h-full`}>
            Preview
            <p className={`text-[#00000088] text-[10px] dark:text-[#eee]`}>
              View details before sending
            </p>
          </span>
        </button>
        <button
          className={`flex items-center w-56 p-3 hover:bg-[#eee] 
                  border-[1px] border-white hover:border-[#00000022] 
                  rounded-md duration-500 text-left text-[#1a1a1d] 
                  dark:border-[#1a1a1d] dark:hover:bg-[#ffffff22] dark:text-[#eee]
                   dark:hover:border-[#ffffff44]`}
          onClick={() => setIsOpen(false)}
        >
          <SendIcon style={`w-6 h-6 mr-4 text-[#1a1a1d] dark:text-[#eee]`} />
          <span className={`w-full h-full`}>
            Send
            <p className={`text-[#00000088] text-[10px] dark:text-[#eee]`}>
              sending information
            </p>
          </span>
        </button>
      </Dropdown>
    </>
  );
};
