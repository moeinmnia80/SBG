export const CommentUserInfo = ({ comment }) => {
  return (
    <>
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <span
            className={`flex items-center justify-center w-12 h-12 dark:bg-[#ffffff22] rounded-full`}
          >
            {comment.name[0].toUpperCase()}
          </span>
          <div
            className={`flex flex-col justify-center text-sm text-[#888] ml-2`}
          >
            <span className={`flex items-center justify-center`}>
              {comment.name} {comment.lastName}
            </span>
            <span className={`flex items-center justify-start`}>
              {comment.datePublished}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
