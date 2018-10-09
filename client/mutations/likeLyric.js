import gql from "graphql-tag";

export default gql`
  mutation likeLyric($lyricId: ID!) {
    likeLyric(id: $lyricId) {
      id
      likes
    }
  }
`;
