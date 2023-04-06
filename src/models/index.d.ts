import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly displayname?: string | null;
  readonly startpos?: number | null;
  readonly Brackets?: (Bracket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly displayname?: string | null;
  readonly startpos?: number | null;
  readonly Brackets: AsyncCollection<Bracket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerBracket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bracket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly teamID: string;
  readonly team1?: string | null;
  readonly team2?: string | null;
  readonly team3?: string | null;
  readonly team4?: string | null;
  readonly team5?: string | null;
  readonly team6?: string | null;
  readonly team7?: string | null;
  readonly team8?: string | null;
  readonly team9?: string | null;
  readonly team10?: string | null;
  readonly team11?: string | null;
  readonly team12?: string | null;
  readonly team13?: string | null;
  readonly team14?: string | null;
  readonly team15?: string | null;
  readonly team16?: string | null;
  readonly winning?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBracket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bracket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly teamID: string;
  readonly team1?: string | null;
  readonly team2?: string | null;
  readonly team3?: string | null;
  readonly team4?: string | null;
  readonly team5?: string | null;
  readonly team6?: string | null;
  readonly team7?: string | null;
  readonly team8?: string | null;
  readonly team9?: string | null;
  readonly team10?: string | null;
  readonly team11?: string | null;
  readonly team12?: string | null;
  readonly team13?: string | null;
  readonly team14?: string | null;
  readonly team15?: string | null;
  readonly team16?: string | null;
  readonly winning?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bracket = LazyLoading extends LazyLoadingDisabled ? EagerBracket : LazyBracket

export declare const Bracket: (new (init: ModelInit<Bracket>) => Bracket) & {
  copyOf(source: Bracket, mutator: (draft: MutableModel<Bracket>) => MutableModel<Bracket> | void): Bracket;
}