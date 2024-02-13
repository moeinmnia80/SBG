import { gql } from "@apollo/client";

// noinspection GraphQLUnresolvedReference
const GET_BLOGS = gql`
  query {
    posts(last: 4) {
      id
      title
      summary
      slug
      text {
        text
      }
      author {
        avatar {
          url
        }
        name
      }
      img {
        url
      }
    }
  }
`;
// noinspection GraphQLUnresolvedReference
const GET_ALL_BLOGS = gql`
  query {
    posts {
      id
      title
      summary
      slug
      text {
        text
      }
      author {
        avatar {
          url
        }
        name
      }
      img {
        url
      }
    }
  }
`;
// noinspection GraphQLUnresolvedReference
const GET_BLOG = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      summary
      slug
      text {
        html
      }
      author {
        avatar {
          url
        }
        name
      }
      img {
        url
      }
      backgroundArticle {
        url
      }
      postData
      datePublished
      comments {
        name
        lastName
        text
        datePublished
        subComments {
          name
          lastName
          text
          datePublished
        }
      }
    }
  }
`;

export { GET_BLOGS, GET_ALL_BLOGS, GET_BLOG };
