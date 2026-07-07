/* eslint-disable react/prop-types */
import { CommentIcon } from "../assets/icons/CommentIcon.jsx";
import { HeartIcon } from "../assets/icons/HeartIcon.jsx";
import { useState } from "react";
import { ClipboardIcon } from "../assets/icons/ClipboardIcon.jsx";

export const FeedbackArticle = ({ slug }) => {
  const [liked, setLiked] = useState(false);
  const BASE_URL = `https://scorpionbitesgroup.vercel.app`;
  return (
    <>
      <div className={`flex gap-x-3`}>
        <span
          className={`w-4 h-4`}
          onClick={() =>
            navigator.clipboard.writeText(`${BASE_URL}/articles/${slug}`)
          }
        >
          <ClipboardIcon style={`w-4 h-4 dark:text-[#1a1a1d]`} />
        </span>
        <CommentIcon style={`w-4 h-4 dark:text-[#1a1a1d]`} />
        <HeartIcon
          clickedHandler={() => setLiked((liked) => !liked)}
          style={`w-4 h-4 hover:fill-[#1a1a1d] cursor-pointer dark:text-[#1a1a1d] ${
            liked && `fill-[#1a1a1d]`
          }`}
        />
      </div>
    </>
  );
};
