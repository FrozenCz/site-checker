import * as Types from '../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type GetSourcesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSourcesQuery = { __typename?: 'Query', testSources: Array<{ __typename?: 'TestSource', exampleField: number }> };

export const GetSourcesDocument = gql`
    query getSources {
  testSources {
    exampleField
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSourcesQueryService extends Apollo.Query<GetSourcesQuery, GetSourcesQueryVariables> {
    document = GetSourcesDocument;
    override client = 'test';
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
      private getSourcesQueryService: GetSourcesQueryService
    ) {}
      
    getSources(variables?: GetSourcesQueryVariables, options?: QueryOptionsAlone<GetSourcesQueryVariables>) {
      return this.getSourcesQueryService.fetch(variables, options)
    }
    
    getSourcesWatch(variables?: GetSourcesQueryVariables, options?: WatchQueryOptionsAlone<GetSourcesQueryVariables>) {
      return this.getSourcesQueryService.watch(variables, options)
    }
  }