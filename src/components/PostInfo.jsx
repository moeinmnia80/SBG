/* eslint-disable react/prop-types */
import { ClockIcon } from "../assets/icons/ClockIcon.jsx";
import { TagIcon } from "../assets/icons/TagIcon.jsx";
import { AcademicIcon } from "../assets/icons/AcademicIcon.jsx";
import { SummaryIcon } from "../assets/icons/SummaryIcon.jsx";

export const PostInfo = ({ data, className }) => {
  return (
    <div className={className}>
      <div
        className={`flex items-center w-max text-xs bg-[#ffffff22] rounded-md p-2`}
      >
        <ClockIcon style={`w-4 h-4 mr-1`} />
        <p className={`mt-1 mr-1`}>Duration:</p>
        <p className={`text-xs mt-1 text-blue-500`}>
          {data?.post.postData.duration}min
        </p>
      </div>
      <div
        className={`flex items-center w-max text-xs bg-[#ffffff22] rounded-md p-2`}
      >
        <TagIcon style={`w-4 h-4 mr-1`} />
        <p className={`mt-1 mr-1`}>Tag:</p>
        {data?.post.postData.grouping.map((item) => (
          <span
            key={`item`}
            className={`text-xs mt-1 text-blue-500 mr-1 uppercase`}
          >
            #{item}
          </span>
        ))}
      </div>
      <div
        className={`flex items-center w-max text-xs bg-[#ffffff22] rounded-md p-2`}
      >
        <AcademicIcon style={`w-4 h-4 mr-1`} />
        <p className={`mt-1 mr-1`}>Level:</p>
        <p className={`text-xs mt-1 text-blue-500 mr-1 capitalize`}>
          {data?.post.postData.level}
        </p>
      </div>
      <div
        className={`flex flex-col sm:flex-row sm:items-center text-xs bg-[#ffffff22] rounded-md p-2`}
      >
        <SummaryIcon style={`hidden sm:flex w-4 h-4 mr-1`} />
        <p className={`mt-1 mr-1`}>Summary:</p>
        <p className={`text-xs mt-1 text-blue-500 mr-1 capitalize`}>
          {data?.post.summary}
        </p>
      </div>
    </div>
  );
};
