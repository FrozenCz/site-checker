import * as Types from '../../../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type CreateNewRealityMutationVariables = Types.Exact<{
  createAdvertisementInput: Types.CreateAdvertisementInput;
}>;


export type CreateNewRealityMutation = { __typename?: 'Mutation', createAdvertisement: { __typename?: 'Advertisement', uuid: string } };

export const CreateNewRealityDocument = gql`
    mutation createNewReality($createAdvertisementInput: CreateAdvertisementInput!) {
  createAdvertisement(createAdvertisementInput: $createAdvertisementInput) {
    uuid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewRealityMutationService extends Apollo.Mutation<CreateNewRealityMutation, CreateNewRealityMutationVariables> {
    document = CreateNewRealityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class gqlApi {
    constructor(
      private createNewRealityMutationService: CreateNewRealityMutationService
    ) {}
      
    createNewReality(variables: CreateNewRealityMutationVariables, options?: MutationOptionsAlone<CreateNewRealityMutation, CreateNewRealityMutationVariables>) {
      return this.createNewRealityMutationService.mutate(variables, options)
    }
  }