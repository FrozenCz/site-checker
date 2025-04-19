import * as Types from '../../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type GetActualAdvertisementsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetActualAdvertisementsQuery = { __typename?: 'Query', advertisements: Array<{ __typename?: 'Advertisement', uuid: string, name: string, published: boolean, price: number, status: string, createdAt: string, imageUrl?: string | null }> };

export type GetSoldAdvertisementsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSoldAdvertisementsQuery = { __typename?: 'Query', advertisements: Array<{ __typename?: 'Advertisement', uuid: string, name: string, published: boolean, price: number, status: string, createdAt: string, imageUrl?: string | null }> };

export const GetActualAdvertisementsDocument = gql`
    query getActualAdvertisements {
  advertisements(status: "actual", published: true) {
    uuid
    name
    published
    price
    status
    createdAt
    imageUrl
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetActualAdvertisementsQueryService extends Apollo.Query<GetActualAdvertisementsQuery, GetActualAdvertisementsQueryVariables> {
    document = GetActualAdvertisementsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSoldAdvertisementsDocument = gql`
    query getSoldAdvertisements {
  advertisements(status: "sold", published: true) {
    uuid
    name
    published
    price
    status
    createdAt
    imageUrl
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSoldAdvertisementsQueryService extends Apollo.Query<GetSoldAdvertisementsQuery, GetSoldAdvertisementsQueryVariables> {
    document = GetSoldAdvertisementsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V extends OperationVariables> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

  interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class gqlApi {
    constructor(
      private getActualAdvertisementsQueryService: GetActualAdvertisementsQueryService,
      private getSoldAdvertisementsQueryService: GetSoldAdvertisementsQueryService
    ) {}
      
    getActualAdvertisements(variables?: GetActualAdvertisementsQueryVariables, options?: QueryOptionsAlone<GetActualAdvertisementsQueryVariables>) {
      return this.getActualAdvertisementsQueryService.fetch(variables, options)
    }
    
    getActualAdvertisementsWatch(variables?: GetActualAdvertisementsQueryVariables, options?: WatchQueryOptionsAlone<GetActualAdvertisementsQueryVariables>) {
      return this.getActualAdvertisementsQueryService.watch(variables, options)
    }
    
    getSoldAdvertisements(variables?: GetSoldAdvertisementsQueryVariables, options?: QueryOptionsAlone<GetSoldAdvertisementsQueryVariables>) {
      return this.getSoldAdvertisementsQueryService.fetch(variables, options)
    }
    
    getSoldAdvertisementsWatch(variables?: GetSoldAdvertisementsQueryVariables, options?: WatchQueryOptionsAlone<GetSoldAdvertisementsQueryVariables>) {
      return this.getSoldAdvertisementsQueryService.watch(variables, options)
    }
  }