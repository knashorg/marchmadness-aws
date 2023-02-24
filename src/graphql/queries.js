/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBracket = /* GraphQL */ `
  query GetBracket($id: ID!) {
    getBracket(id: $id) {
      id
      untitledfield
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBrackets = /* GraphQL */ `
  query ListBrackets(
    $filter: ModelBracketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrackets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        untitledfield
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
