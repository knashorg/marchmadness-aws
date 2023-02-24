/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBracket = /* GraphQL */ `
  mutation CreateBracket(
    $input: CreateBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    createBracket(input: $input, condition: $condition) {
      id
      untitledfield
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBracket = /* GraphQL */ `
  mutation UpdateBracket(
    $input: UpdateBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    updateBracket(input: $input, condition: $condition) {
      id
      untitledfield
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBracket = /* GraphQL */ `
  mutation DeleteBracket(
    $input: DeleteBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    deleteBracket(input: $input, condition: $condition) {
      id
      untitledfield
      createdAt
      updatedAt
      owner
    }
  }
`;
