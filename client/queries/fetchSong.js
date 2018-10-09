import gql from "graphql-tag";

export default gql`
  query song($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        likes
        id
        content
      }
    }
  }
`;
