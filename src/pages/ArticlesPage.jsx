import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "../graphql/queries.js";
import { CardPost } from "../components/CardPost.jsx";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
`;
const Articles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16.875rem));
  grid-template-rows: repeat(auto-fit, 25rem);
  grid-auto-rows: 25rem;
  place-content: center;
  gap: 2.5rem;
  width: 100%;
`;
export const ArticlesPage = () => {
  const { loading, data, error } = useQuery(GET_ALL_BLOGS);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading)
    return (
      <div className={`grid place-items-center w-full h-svh`}>
        <span className="loader"></span>
      </div>
    );
  if (error) return error.message;
  return (
    <section
      className={`w-full h-full bg-white dark:bg-[#1a1a1d] px-8 pt-12 mb-36 sm:mb-0`}
    >
      <Container className={`container`}>
        <Articles className={`min-h-[calc(100svh-14rem)]`}>
          {data?.posts.map((post) => (
            <CardPost {...post} key={post.id} />
          ))}
        </Articles>
      </Container>
    </section>
  );
};
