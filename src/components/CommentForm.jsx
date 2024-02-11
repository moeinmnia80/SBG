import { Input } from "@nextui-org/input";
import { Textarea } from "./Textarea.jsx";
export const CommentForm = () => {
  return (
    <>
      <section
        className={`grid grid-cols-2 grid-rows-3 gap-4 w-full h-max mt-[25rem] mb-[25rem] \
        bg-white dark:bg-[#1a1a1d] p-2`}
      >
        <Input
          type="text"
          variant={"bordered"}
          label="Name"
          className={`row-start-1 row-end-2 rounded-xl`}
        />
        <Input
          type="text"
          variant={"bordered"}
          label="LastName"
          className={`row-start-2 row-end-3 rounded-xl`}
        />
        <button
          className={`text-white bg-[#1a1a1d] rounded-xl \ 
          row-start-3 row-end-4 hover:bg-[#eee] hover:text-[#1a1a1d] \ 
          dark:bg-[#ffffff22] dark:hover:text-[#888]`}
        >
          Comment
        </button>
        <Textarea
          className={`max-w-full h-full row-start-1 row-end-4 col-start-2 col-end-3 bg-[#eee] rounded-xl`}
        />
      </section>
    </>
  );
};
