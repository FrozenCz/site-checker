import * as Types from '../../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type GetAdvertisementListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAdvertisementListQuery = { __typename?: 'Query', advertisements: Array<{ __typename?: 'Advertisement', uuid: string, name: string, published: boolean, price: number, status: string, createdAt: string, imageUrl?: string | null }> };

export const GetAdvertisementListDocument = gql`
    query getAdvertisementList {
  advertisements {
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
  export class GetAdvertisementListQueryService extends Apollo.Query<GetAdvertisementListQuery, GetAdvertisementListQueryVariables> {
    document = GetAdvertisementListDocument;
    
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
      private getAdvertisementListQueryService: GetAdvertisementListQueryService
    ) {}
      
    getAdvertisementList(variables?: GetAdvertisementListQueryVariables, options?: QueryOptionsAlone<GetAdvertisementListQueryVariables>) {
      return this.getAdvertisementListQueryService.fetch(variables, options)
    }
    
    getAdvertisementListWatch(variables?: GetAdvertisementListQueryVariables, options?: WatchQueryOptionsAlone<GetAdvertisementListQueryVariables>) {
      return this.getAdvertisementListQueryService.watch(variables, options)
    }
  }