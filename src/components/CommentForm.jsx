import { Input } from "@nextui-org/input";
import { Textarea } from "./Textarea.jsx";
import { useState } from "react";
import { useDate } from "../helpers/useDate.js";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutations.js";
import { SparkleIcon } from "../assets/icons/SparkleIcon.jsx";
import { Spinner } from "@nextui-org/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CommentForm = ({ slug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    text: "",
    datePublished: useDate(),
  });
  const clearFormData = { name: "", lastName: "", text: "" };
  const changeFormDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const discardHandler = () => {
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
      toast.success(
        "Your comment has been submitted and is awaiting approval",
        {
          position: "top-center",
          theme: "dark",
        },
      );
      setFormData(() => ({ ...formData, ...clearFormData }));
    } else {
      toast.warn("Please fill in all the fields", {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className={`relative flex w-full h-max mt-[25rem] overflow-hidden`}
      >
        <button
          className={`flex items-center justify-center w-full sm:w-max py-4 px-8 text-white bg-[#C62128] \
          border-3 border-transparent rounded-xl \ 
          hover:bg-transparent hover:text-[#C62128] hover:border-3 hover:border-[#C62128] \
          duration-700 dark:bg-[#C62128] dark:hover:text-[#ffffff55] dark:hover:border-[#ffffff44] \
          absolute bottom-0 ${isOpen ? `-left-full` : `left-0`}`}
          onClick={() => setIsOpen(true)}
        >
          New Comment
          <SparkleIcon style={`w-4 h-4 ml-2`} />
        </button>
        <div
          className={`relative grid w-full h-max gap-4 ${
            isOpen
              ? `left-0 grid-cols-1 sm:grid-cols-4 sm:grid-rows-2`
              : `left-full`
          }
          bg-white dark:bg-[#1a1a1d]  duration-700`}
        >
          <Input
            type="text"
            variant={"bordered"}
            label="Name"
            name={`name`}
            value={formData.name}
            className={`sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 rounded-xl`}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <Input
            type="text"
            variant={"bordered"}
            label="LastName"
            name={`lastName`}
            value={formData.lastName}
            className={`sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-2 rounded-xl`}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <Textarea
            className={`max-w-full h-full sm:row-start-1 sm:row-end-3 sm:col-start-2 sm:col-end-4 bg-transparent rounded-xl \
              resize-none overflow-auto p-4 border-2 \
              border-[#E4E4E7] dark:border-[#1a1a1d] dark:border-[#ffffff22] row-span-2 sm:row-span-1`}
            value={formData.text}
            onChange={(e) => changeFormDataHandler(e)}
          />
          <button
            className={`flex items-center justify-center text-white bg-[#1a1a1d] rounded-xl border-3 border-transparent \ 
            sm:row-start-1 sm:row-end-2 hover:bg-transparent hover:text-[#1a1a1d] \
            hover:border-3 hover:border-[#1a1a1d] duration-500
            dark:bg-[#ffffff22] dark:hover:text-[#888] dark:hover:border-[#ffffff33] py-4 sm:p-0`}
            onClick={() => sendCommentHandler()}
          >
            {loading ? (
              <Spinner color="danger" labelColor="foreground" />
            ) : (
              `Comment`
            )}
          </button>
          <button
            className={`flex items-center justify-center text-white rounded-xl bg-[#C62128] border-3 border-transparent \ 
            sm:row-start-2 sm:row-end-3 hover:bg-transparent hover:text-[#C62128] \
            hover:border-3 hover:border-[#C62128] duration-500
            dark:bg-[#C62128] dark:hover:text-[#ffffff55] dark:hover:border-[#ffffff44] py-4 sm:p-0`}
            onClick={() => discardHandler()}
          >
            Discard
          </button>
        </div>
      </section>
    </>
  );
};
