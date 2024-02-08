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
export { GET_BLOGS };
