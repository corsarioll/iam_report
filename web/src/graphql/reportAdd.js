import gql from 'graphql-tag';
 
const bar = gql`
  fragment itemFragment on Foo {
    field1
    field2
  }
`;

const foo = gql`
  query foo {
    foo {
      ...barFragment
    }
  }

  ${bar}
`;

const barto = gql`{mutation reportCreate($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}}`;