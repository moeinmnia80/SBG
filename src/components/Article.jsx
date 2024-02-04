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
  height: 100svh;
  padding: 0 7.5rem;
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
        <Container className={`container`}>
          <div className={`flex items-center justify-between w-full h-12 mb-4`}>
            <img
              src={`${articleImg}`}
              alt="articles"
              className={`w-max h-full object-contain`}
            />
            <Link
              to={`articles`}
              className={`bg-black text-white px-8 py-1 rounded-md`}
            >
              All
            </Link>
          </div>
          <Articles className={``}>
            {articles.map((article) => (
              <div
                key={article.id}
                className={`flex flex-col justify-between w-full h-full bg-white border-[1px] border-[#eee] \
                 shadow-lg duration-500 p-2 rounded-2xl`}
              >
                <img
                  src={`${article.img}`}
                  alt="article"
                  className={`w-full h-1/2 object-cover rounded-2xl shadow-inner`}
                />
                <h2
                  className={`w-full h-max text-sm text-center uppercase font-bold`}
                >
                  <span className={`text-left text-sm font-normal`}>
                    topic:
                  </span>{" "}
                  {article.title}
                </h2>
                <p className={`px-2 text-sm text-gray-400`}>
                  {article.summary}
                </p>
                <Link
                  to={`/articles/${routeHandler(article.title)}`}
                  className={`bg-black hover:bg-white text-center border-2 border-black \
                  hover:text-black duration-300 p-2 rounded-xl text-white`}
                >
                  Read more
                </Link>
              </div>
            ))}
          </Articles>
        </Container>
      </Element>
    </>
  );
};
