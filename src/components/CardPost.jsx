import { FeedbackArticle } from "./FeedbackArticle.jsx";
import { Link } from "react-scroll";
export const CardPost = ({ author, img, slug, summary, title }) => {
  return (
    <>
      <article
        className={`flex flex-col justify-between w-full h-full \
                  bg-white border-[1px] border-[#eee] \
                  shadow-lg duration-500 p-2 rounded-2xl text-center \
                  dark:bg-[#eee]`}
      >
        <div className={`w-full h-3/5`}>
          <img
            src={`${img.url}`}
            alt="article"
            className={`w-full h-4/5 object-cover rounded-t-2xl shadow-inner`}
          />
          <span
            className={`flex items-center justify-between w-full h-1/5 py-2 \
                border-b-[1px] border-[#eee] dark:border-[#00000022]`}
          >
            <div className={`flex items-center w-max h-full`}>
              <img
                src={`${author?.avatar.url}`}
                alt=""
                className={`w-6 h-6 object-cover rounded-full mr-2`}
              />
              <p
                className={`text-[10px] font-bold leading-none text-[#00000044]`}
              >
                Moein
              </p>
            </div>
            <FeedbackArticle title={title} slug={slug} />
          </span>
        </div>
        <h2 className={`w-full h-max text-[13px] uppercase font-bold py-1`}>
          {title}
        </h2>
        <p className={`h-max px-2 pb-1 text-xs text-gray-400 dark:text-black`}>
          {summary}
        </p>
        <Link
          to={`/articles/${slug}`}
          className={`bg-[#1a1a1d] hover:bg-white text-center border-2 border-[#1a1a1d] \
                hover:text-[#1a1a1d] duration-300 p-2 rounded-xl text-white text-xs cursor-pointer \
                dark:bg-[#1a1a1d] dark:text-[#eee] dark:hover:bg-[#eee] dark:hover:text-[#1a1a1d]`}
        >
          Read more
        </Link>
      </article>
    </>
  );
};
