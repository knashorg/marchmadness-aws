/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewBracket = /* GraphQL */ `
  mutation CreateNewBracket(
    $input: CreateNewBracketInput!
    $condition: ModelNewBracketConditionInput
  ) {
    createNewBracket(input: $input, condition: $condition) {
      id
      json
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateNewBracket = /* GraphQL */ `
  mutation UpdateNewBracket(
    $input: UpdateNewBracketInput!
    $condition: ModelNewBracketConditionInput
  ) {
    updateNewBracket(input: $input, condition: $condition) {
      id
      json
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteNewBracket = /* GraphQL */ `
  mutation DeleteNewBracket(
    $input: DeleteNewBracketInput!
    $condition: ModelNewBracketConditionInput
  ) {
    deleteNewBracket(input: $input, condition: $condition) {
      id
      json
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      image
      displayname
      startpos
      Brackets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      image
      displayname
      startpos
      Brackets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      image
      displayname
      startpos
      Brackets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBracket = /* GraphQL */ `
  mutation CreateBracket(
    $input: CreateBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    createBracket(input: $input, condition: $condition) {
      id
      untitledfield
      teamID
      team1
      team2
      team3
      team4
      team5
      team6
      team7
      team8
      team9
      team10
      team11
      team12
      team13
      team14
      team15
      team16
      winning
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      teamID
      team1
      team2
      team3
      team4
      team5
      team6
      team7
      team8
      team9
      team10
      team11
      team12
      team13
      team14
      team15
      team16
      winning
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      teamID
      team1
      team2
      team3
      team4
      team5
      team6
      team7
      team8
      team9
      team10
      team11
      team12
      team13
      team14
      team15
      team16
      winning
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
