import styled from "styled-components";
import { Element } from "react-scroll";
import articles from "../constants/articles.js";
import { Link } from "react-router-dom";
import articleImg from "../assets/images/article.png";
import { routeHandler } from "../helpers/helpers.js";
import AuthorImg from "../assets/images/profileAuther.jpg";
import { FeedbackArticle } from "./FeedbackArticle.jsx";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries.js";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-template-rows: repeat(auto-fit, 25rem);
  grid-auto-rows: 25rem;
  place-content: center;
  gap: 2.5rem;
  width: 100%;
  height: max-content;
`;
export const Article = () => {
  const { loading, data, error } = useQuery(GET_BLOGS);
  return (
    <>
      <Element name={`articles`} id={`articles`}>
        <section
          className={`grid place-items-center w-full min-h-svh py-12 px-8 pb-36 lg:pb-0`}
        >
          <Container className={`container`}>
            <div
              className={`to-up flex items-center justify-between w-full h-12 mb-8`}
            >
              <img
                src={`${articleImg}`}
                alt="articles"
                className={`w-max h-full object-contain`}
              />
              <Link
                to={`articles`}
                className={`px-8 py-1 border-[1px] border-[#1a1a1d] rounded-md \ 
              hover:bg-[#1a1a1d] hover:text-white \
              dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#1a1a1d] \
              duration-300`}
              >
                All
              </Link>
            </div>
            <Articles className={`to-up`}>
              {articles.map((article) => (
                <article
                  key={article.id}
                  className={`flex flex-col justify-between w-full h-full \ 
                  bg-white border-[1px] border-[#eee] \
                  shadow-lg duration-500 p-2 rounded-2xl text-center \
                  dark:bg-[#eee]`}
                >
                  <div className={`w-full h-3/5`}>
                    <img
                      src={`${article.img}`}
                      alt="article"
                      className={`w-full h-4/5 object-cover rounded-t-2xl shadow-inner`}
                    />
                    <span
                      className={`flex items-center justify-between w-full h-1/5 py-2 \
                    border-b-[1px] border-[#eee] dark:border-[#00000022]`}
                    >
                      <div className={`flex items-center w-max h-full`}>
                        <img
                          src={`${AuthorImg}`}
                          alt=""
                          className={`w-6 h-6 object-cover rounded-full mr-2`}
                        />
                        <p
                          className={`text-[10px] font-bold leading-none text-[#00000044]`}
                        >
                          Moein
                        </p>
                      </div>
                      <FeedbackArticle article={article} />
                    </span>
                  </div>
                  <h2
                    className={`w-full h-max text-[13px] uppercase font-bold py-1`}
                  >
                    {article.title}
                  </h2>
                  <p
                    className={`h-max px-2 pb-1 text-xs text-gray-400 dark:text-black`}
                  >
                    {article.summary}
                  </p>
                  <Link
                    to={`/articles/${routeHandler(article.title)}`}
                    className={`bg-[#1a1a1d] hover:bg-white text-center border-2 border-[#1a1a1d] \
                    hover:text-[#1a1a1d] duration-300 p-2 rounded-xl text-white text-xs \ 
                    dark:bg-[#1a1a1d] dark:text-[#eee] dark:hover:bg-[#eee] dark:hover:text-[#1a1a1d]`}
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </Articles>
          </Container>
        </section>
      </Element>
    </>
  );
};
