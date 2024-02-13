import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../graphql/queries.js";
import styled from "styled-components";
import { CommentForm } from "../components/CommentForm.jsx";
import { CommentBox } from "../components/CommentBox.jsx";
import { DateIcon } from "../assets/icons/DateIcon.jsx";
import { useEffect } from "react";
import { copyFromCodeTag } from "../helpers/helpers.js";
import { PostInfo } from "../components/PostInfo.jsx";

// import sanitizeHtml from "sanitize-html";
// styled-components
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
const Info = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
`;
const Main = styled.div`
  display: flex;
`;
export const ArticleDetailPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG, { variables: { slug } });
  useEffect(() => {
    copyFromCodeTag();
  }, []);

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
        className={`flex items-start justify-center w-full min-h-[calc(100svh-14rem)] px-8 sm:p-0 \
        dark:bg-[#1a1a1d]`}
      >
        <Container className={`container`}>
          <article
            className={`flex flex-col relative w-full h-full bg-white dark:bg-[#1a1a1d] pt-12`}
          >
            <Header
              className={`flex flex-col w-full border-b-1 \
              dark:border-[#ffffff22] border-[#eee] pb-12`}
            >
              <div
                className={`flex w-full items-center justify-between  border-b-[1px] border-[#eee] pb-4`}
              >
                <div className={`hidden sm:flex items-center h-max`}>
                  <img
                    src={`${data?.post?.author?.avatar.url}`}
                    alt="avatar"
                    className={`w-6 h-6 rounded-full`}
                  />
                  <h3 className={`text-[11px] ml-2`}>
                    {data?.post?.author.name}
                  </h3>
                </div>
                <h1 className={`h-max uppercase text-sm font-bold mt-1 sm:m-0`}>
                  {data?.post?.title}
                </h1>
                <div
                  className={`flex gap-x-3 items-center justify-center h-max text-[11px]`}
                >
                  <DateIcon style={`w-4 h-4`} />
                  <p className={`mt-1`}>{data?.post?.datePublished}</p>
                </div>
              </div>
              <Info className={`flex-col sm:flex-row sm:items-center pt-12`}>
                <Banner className={`w-full sm:w-1/3 h-56 mr-2`}>
                  <img
                    src={`${data?.post?.backgroundArticle.url}`}
                    alt=""
                    className={`w-full h-full object-cover rounded-xl`}
                  />
                </Banner>
                <PostInfo
                  data={data}
                  className={`flex flex-col gap-2 w-full sm:w-2/3 pt-12 sm:pt-0 sm:pl-12`}
                />
              </Info>
            </Header>
            <Main className={`py-2 overflow-hidden`}>
              <div
                dangerouslySetInnerHTML={{ __html: data?.post.text.html }}
                className={`w-full min-h-max text-center sm:text-left`}
              />
            </Main>
          </article>
          <CommentForm slug={slug} />
          <CommentBox comments={data?.post.comments} />
        </Container>
      </section>
    </>
  );
};
