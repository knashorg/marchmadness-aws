import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBracket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bracket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bracket = LazyLoading extends LazyLoadingDisabled ? EagerBracket : LazyBracket

export declare const Bracket: (new (init: ModelInit<Bracket>) => Bracket) & {
  copyOf(source: Bracket, mutator: (draft: MutableModel<Bracket>) => MutableModel<Bracket> | void): Bracket;
}