import { Input } from "@nextui-org/input";
import { Textarea } from "./Textarea.jsx";
import { useState } from "react";
import { useDate } from "../helpers/useDate.js";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutations.js";

export const CommentForm = ({ slug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    text: "",
    datePublished: useDate(),
  });
  const changeFormDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const discardHandler = () => {
    const clearFormData = { name: "", lastName: "", text: "" };
    setFormData(() => ({ ...formData, ...clearFormData }));
    setIsOpen(false);
  };

  const { name, lastName, text, datePublished } = formData;
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      lastName,
      text,
      datePublished,
      slug,
    },
  });

  const sendCommentHandler = async () => {
    if (name && lastName && text) {
      await sendComment();
    } else {
    }
  };

  return (
    <>
      <section
        className={`relative flex w-full h-max mt-[25rem] overflow-hidden`}
      >
        <button
          className={`flex w-max py-4 px-8 text-white bg-[#1a1a1d] \
          border-3 border-transparent rounded-xl \ 
          hover:bg-transparent hover:text-[#1a1a1d] \
          hover:border-3 hover:border-[#1a1a1d] duration-700
          dark:bg-[#C62128] dark:hover:text-[#ffffff55] dark:hover:border-[#ffffff44] absolute bottom-0 ${
            isOpen ? `-left-full` : `left-0`
          }`}
          onClick={() => setIsOpen(true)}
        >
          New Comment
        </button>
        <div
          className={`relative grid w-full h-max gap-4 ${
            isOpen ? `left-0 grid-cols-4 grid-rows-2` : `left-full`
          }
          bg-white dark:bg-[#1a1a1d]  duration-700`}
        >
          <Input
            type="text"
            variant={"bordered"}
            label="Name"
            name={`name`}
            value={formData.name}
            className={`row-start-1 row-end-2 col-start-1 col-end-2 rounded-xl`}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <Input
            type="text"
            variant={"bordered"}
            label="LastName"
            name={`lastName`}
            value={formData.lastName}
            className={`row-start-2 row-end-3 col-start-1 col-end-2 rounded-xl`}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <Textarea
            className={`max-w-full h-full row-start-1 row-end-3 col-start-2 col-end-4 bg-transparent rounded-xl \
              resize-none overflow-auto p-4 border-2 \
              border-[#E4E4E7] dark:border-[#1a1a1d] dark:border-[#ffffff22]`}
            value={formData.text}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <button
            className={`text-white bg-[#1a1a1d] rounded-xl border-3 border-transparent \ 
            row-start-1 row-end-2 hover:bg-transparent hover:text-[#1a1a1d] \
            hover:border-3 hover:border-[#1a1a1d] duration-500
            dark:bg-[#ffffff22] dark:hover:text-[#888] dark:hover:border-[#ffffff33]`}
            onClick={() => sendCommentHandler()}
          >
            {loading ? (
              <div
                className={`w-5 h-5 bg-transparent border-2 border-[#ffffff33] animate-spin`}
              >
                Processing
              </div>
            ) : (
              `Comment`
            )}
          </button>
          <button
            className={`flex items-center justify-center text-white bg-[#1a1a1d] rounded-xl border-3 border-transparent \ 
            row-start-2 row-end-3 hover:bg-transparent hover:text-[#1a1a1d] \
            hover:border-3 hover:border-[#1a1a1d] duration-500
            dark:bg-[#C62128] dark:hover:text-[#ffffff55] dark:hover:border-[#ffffff44]`}
            onClick={() => discardHandler()}
          >
            Discard
          </button>
        </div>
      </section>
    </>
  );
};
