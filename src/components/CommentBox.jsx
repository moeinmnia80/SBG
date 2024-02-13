import { CommentUserInfo } from "./CommentUserInfo.jsx";

export const CommentBox = ({ comments }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-y-4 w-full ${
          comments?.length ? `h-max` : `h-32`
        } dark:bg-[#ffffff22] rounded-xl p-4 mt-10 mb-16`}
      >
        {!comments?.length ? (
          <p className={`flex items-center justify-center w-full h-full `}>
            Nothing any Comments
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.name}
              className={`w-full h-max bg-[#ffffff22] rounded-lg p-8`}
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
