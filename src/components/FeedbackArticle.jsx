import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { ClipboardIcon } from "../assets/icons/ClipboardIcon.jsx";
import { CommentIcon } from "../assets/icons/CommentIcon.jsx";
import { HeartIcon } from "../assets/icons/HeartIcon.jsx";
import { useCallback, useState } from "react";

export const FeedbackArticle = ({ title, slug }) => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const BASE_URL = `https://scorpionbitesgroup.vercel.app`;
  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);
  return (
    <>
      <div className={`flex gap-x-3`}>
        <CopyToClipboard onCopy={onCopy} text={`${BASE_URL}/articles/${slug}`}>
          <ClipboardIcon style={`w-4 h-4`} />
        </CopyToClipboard>
        <CommentIcon style={`w-4 h-4`} />
        <HeartIcon
          clickedHandler={() => setLiked((liked) => !liked)}
          style={`w-4 h-4 hover:fill-[#1a1a1d] cursor-pointer ${
            liked && `fill-[#1a1a1d]`
          }`}
        />
      </div>
    </>
  );
};
