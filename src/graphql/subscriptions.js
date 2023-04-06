/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNewBracket = /* GraphQL */ `
  subscription OnCreateNewBracket(
    $filter: ModelSubscriptionNewBracketFilterInput
    $owner: String
  ) {
    onCreateNewBracket(filter: $filter, owner: $owner) {
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
export const onUpdateNewBracket = /* GraphQL */ `
  subscription OnUpdateNewBracket(
    $filter: ModelSubscriptionNewBracketFilterInput
    $owner: String
  ) {
    onUpdateNewBracket(filter: $filter, owner: $owner) {
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
export const onDeleteNewBracket = /* GraphQL */ `
  subscription OnDeleteNewBracket(
    $filter: ModelSubscriptionNewBracketFilterInput
    $owner: String
  ) {
    onDeleteNewBracket(filter: $filter, owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateBracket = /* GraphQL */ `
  subscription OnCreateBracket(
    $filter: ModelSubscriptionBracketFilterInput
    $owner: String
  ) {
    onCreateBracket(filter: $filter, owner: $owner) {
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
export const onUpdateBracket = /* GraphQL */ `
  subscription OnUpdateBracket(
    $filter: ModelSubscriptionBracketFilterInput
    $owner: String
  ) {
    onUpdateBracket(filter: $filter, owner: $owner) {
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
export const onDeleteBracket = /* GraphQL */ `
  subscription OnDeleteBracket(
    $filter: ModelSubscriptionBracketFilterInput
    $owner: String
  ) {
    onDeleteBracket(filter: $filter, owner: $owner) {
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
