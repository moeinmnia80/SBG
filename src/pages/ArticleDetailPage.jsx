import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../graphql/queries.js";
import styled from "styled-components";
// import sanitizeHtml from "sanitize-html";
import { CommentForm } from "../components/CommentForm.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Banner = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  display: flex;
`;
export const ArticleDetailPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG, { variables: { slug } });
  if (loading) {
    return (
      <div className={`grid place-items-center w-full h-svh dark:bg-[#1a1a1d]`}>
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <section
        className={`flex items-start justify-center w-full min-h-[calc(100svh-14rem)] px-8 sm:p-0 sm:pt-12 \
        dark:bg-[#1a1a1d]`}
      >
        <Container className={`container`}>
          <article
            className={`flex flex-col relative w-full h-full bg-white dark:bg-[#1a1a1d]`}
          >
            <Header className={`w-full`}>
              <Banner className={`w-1/3 h-56 mr-2`}>
                <img
                  src={`${data?.post?.backgroundArticle.url}`}
                  alt=""
                  className={`w-full h-full object-cover rounded-xl`}
                />
              </Banner>
              <section
                className={`flex items-start justify-between w-2/3 h-max border-b-[1px] border-[#eee] p-4`}
              >
                <div className={`flex items-center`}>
                  <img
                    src={`${data?.post?.author?.avatar.url}`}
                    alt="avatar"
                    className={`w-6 h-6 rounded-full`}
                  />
                  <h3 className={`text-[11px] ml-2`}>
                    {data?.post?.author.name}
                  </h3>
                </div>
                <h1 className={`uppercase text-sm font-bold`}>
                  {data?.post?.title}
                </h1>
                <p className={`text-[11px]`}>
                  <span className={`uppercase`}>published: </span>
                  {data?.post?.datePublished}
                </p>
              </section>
            </Header>
            <Main className={`py-2 overflow-hidden`}>
              <p
              // dangerouslySetInnerHTML={{
              //   __html: sanitizeHtml(data?.post.text.html),
              // }}
              ></p>
              {/*{data?.post.text.html}*/}
            </Main>
          </article>
          <CommentForm />
        </Container>
      </section>
    </>
  );
};
