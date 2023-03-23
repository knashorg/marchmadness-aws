/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        displayname
        startpos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        displayname
        startpos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBracket = /* GraphQL */ `
  query GetBracket($id: ID!) {
    getBracket(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBrackets = /* GraphQL */ `
  query SyncBrackets(
    $filter: ModelBracketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrackets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const bracketsByTeamID = /* GraphQL */ `
  query BracketsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBracketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bracketsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
