import * as Types from '../../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type GetAdvertisementDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetAdvertisementDetailQuery = { __typename?: 'Query', advertisement: { __typename?: 'Advertisement', uuid: string, name: string, description: string, price: number, createdAt: string, updatedAt: string, imageUrl?: string | null, published: boolean, video: string, map: string, advertisementImages?: Array<{ __typename?: 'AdvertisementImage', uuid: string, imageUrl: string, order: number }> | null } };

export const GetAdvertisementDetailDocument = gql`
    query getAdvertisementDetail($id: String!) {
  advertisement(uuid: $id) {
    uuid
    name
    description
    price
    createdAt
    updatedAt
    imageUrl
    published
    video
    map
    advertisementImages {
      uuid
      imageUrl
      order
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAdvertisementDetailQueryService extends Apollo.Query<GetAdvertisementDetailQuery, GetAdvertisementDetailQueryVariables> {
    document = GetAdvertisementDetailDocument;
    
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
      private getAdvertisementDetailQueryService: GetAdvertisementDetailQueryService
    ) {}
      
    getAdvertisementDetail(variables: GetAdvertisementDetailQueryVariables, options?: QueryOptionsAlone<GetAdvertisementDetailQueryVariables>) {
      return this.getAdvertisementDetailQueryService.fetch(variables, options)
    }
    
    getAdvertisementDetailWatch(variables: GetAdvertisementDetailQueryVariables, options?: WatchQueryOptionsAlone<GetAdvertisementDetailQueryVariables>) {
      return this.getAdvertisementDetailQueryService.watch(variables, options)
    }
  }