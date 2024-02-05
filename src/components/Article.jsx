import styled from "styled-components";
import { Element } from "react-scroll";
import articles from "../constants/articles.js";
import { Link } from "react-router-dom";
import articleImg from "../assets/images/article.png";
import { routeHandler } from "../helpers/helpers.js";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100svh;
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
  return (
    <>
      <Element name={`articles`} id={`articles`}>
        <section className={`w-full h-full px-4`}>
          <Container className={`container`}>
            <div
              className={`to-up flex items-center justify-between w-full h-12 mb-4`}
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
                <div
                  key={article.id}
                  className={`flex flex-col justify-between w-full h-full \ 
                  bg-white border-[1px] border-[#eee] \
                  shadow-lg duration-500 p-2 rounded-2xl text-center \
                  dark:bg-[#eee]`}
                >
                  <img
                    src={`${article.img}`}
                    alt="article"
                    className={`w-full h-1/2 object-cover rounded-2xl shadow-inner`}
                  />
                  <h2 className={`w-full h-max text-sm uppercase font-bold`}>
                    {article.title}
                  </h2>
                  <p className={`px-2 text-sm text-gray-400 dark:text-black`}>
                    {article.summary}
                  </p>
                  <Link
                    to={`/articles/${routeHandler(article.title)}`}
                    className={`bg-[#1a1a1d] hover:bg-white text-center border-2 border-[#1a1a1d] \
                    hover:text-[#1a1a1d] duration-300 p-2 rounded-xl text-white \ 
                    dark:bg-[#1a1a1d] dark:text-[#eee] dark:hover:bg-[#eee] dark:hover:text-[#1a1a1d]`}
                  >
                    Read more
                  </Link>
                </div>
              ))}
            </Articles>
          </Container>
        </section>
      </Element>
    </>
  );
};
