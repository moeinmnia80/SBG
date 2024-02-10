import styled from "styled-components";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import articleImg from "../assets/images/article.png";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries.js";
import { CardPost } from "./CardPost.jsx";

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
              {data?.posts.map((post) => (
                <CardPost {...post} key={post.id} />
              ))}
            </Articles>
          </Container>
        </section>
      </Element>
    </>
  );
};
