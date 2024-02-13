import { DateIcon } from "../assets/icons/DateIcon.jsx";

export const CommentUserInfo = ({ comment }) => {
  return (
    <>
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <span
            className={`flex items-center justify-center w-12 h-12 bg-[#00000022] \
            dark:bg-[#ffffff22] rounded-full`}
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
              <DateIcon style={`w-4 h-4 mr-1`} />
              <p className={`mt-1`}>{comment.datePublished}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
