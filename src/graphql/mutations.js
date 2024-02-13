// noinspection GraphQLUnresolvedReference

import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $lastName: String!
    $text: String!
    $datePublished: Date!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        lastName: $lastName
        text: $text
        datePublished: $datePublished
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
