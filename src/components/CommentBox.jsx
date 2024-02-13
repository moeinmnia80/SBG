import { CommentUserInfo } from "./CommentUserInfo.jsx";

export const CommentBox = ({ comments }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-y-4 w-full bg-[#eee] ${
          comments?.length ? `h-max` : `h-32`
        } dark:bg-[#ffffff22] rounded-xl p-4 mt-10 mb-36 sm:mb-20`}
      >
        {!comments?.length ? (
          <p
            className={`flex items-center justify-center w-full h-full text-[#888]`}
          >
            Nothing Comments
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.name}
              className={`w-full h-max bg-[#00000022] dark:bg-[#ffffff22] rounded-lg p-8`}
            >
              <CommentUserInfo comment={comment} />
              <div className={`indent-14 mt-4`}>{comment.text}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
