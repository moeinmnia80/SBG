import styled from "styled-components";
import { useState } from "react";
import { DropDown } from "./DropDown.jsx";

const Container = styled.div`
  display: grid;
  place-items: center;
`;
const Contact = styled.div`
  position: absolute;
  bottom: 100%;
  transform: translateY(50%);
`;
export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // store values in state
  const changeEmailDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmailData((emailData) => ({ ...emailData, [name]: value }));
  };
  return (
    <>
      <section className={`relative w-full h-64 sm:h-36 bg-[#eee] px-8`}>
        <Container className={`container relative h-full`}>
          <Contact
            className={`flex flex-col md:flex-row items-center justify-between \
             w-full md:h-16 bg-[#1a1a1d] rounded-xl p-2 md:px-2 text-[#eee] dark:border-[1px] dark:border-[#eee]`}
          >
            <div className={`flex flex-col sm:flex-row w-full md:w-1/2 gap-2`}>
              <input
                type="text"
                value={emailData.name}
                name={`name`}
                placeholder={`Name`}
                className={`w-full sm:w-1/2 md:w-1/3 h-12 bg-[#ffffff44] p-2 outline-none rounded-md text-sm placeholder:text-[#eee]`}
                onChange={(e) => changeEmailDataHandler(e)}
              />
              <input
                type="email"
                value={emailData.email}
                name={`email`}
                required={true}
                placeholder={`E-mail`}
                className={`w-full sm:w-1/2 md:w-1/3 h-12 bg-[#ffffff44] p-2 outline-none rounded-md text-sm placeholder:text-[#eee]`}
                onChange={(e) => changeEmailDataHandler(e)}
              />
              <input
                type="text"
                value={emailData.message}
                name={`message`}
                placeholder={`About`}
                className={`w-full md:w-1/3 lg:focus:w-2/3 h-12 bg-[#ffffff44] p-2 outline-none rounded-md text-sm \ 
                duration-500 placeholder:text-[#eee]`}
                onChange={(e) => changeEmailDataHandler(e)}
              />
            </div>
            <button
              className={`w-full md:w-32 h-12 bg-[#eee] font-bold text-black hover:bg-white dark:text-[#1a1a1d] py-2 \
              duration-500 rounded-md text-sm mt-2 md:m-0`}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Contact Me
            </button>
            {isOpen && <DropDown setIsOpen={setIsOpen} />}
          </Contact>
          <p className={`absolute bottom-2 text-[#1a1a1d] text-[11px]`}>
            © 2024 SBG. All rights reserved.
          </p>
        </Container>
      </section>
    </>
  );
};
