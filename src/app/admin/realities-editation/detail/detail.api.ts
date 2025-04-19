import * as Types from '../../../graphql/generated/types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
import { OperationVariables } from '@apollo/client/core';
export type GetDetailQueryVariables = Types.Exact<{
  uuid: Types.Scalars['String']['input'];
}>;


export type GetDetailQuery = { __typename?: 'Query', advertisement: { __typename?: 'Advertisement', uuid: string, createdAt: string, name: string, description: string, published: boolean, price: number, status: string, video: string, imageUrl?: string | null, map: string, advertisementImages?: Array<{ __typename?: 'AdvertisementImage', uuid: string, imageUrl: string, order: number }> | null } };

export type UpdateImagesOrderMutationVariables = Types.Exact<{
  advertisementUuid: Types.Scalars['String']['input'];
  updateImagesOrderInput: Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input'];
}>;


export type UpdateImagesOrderMutation = { __typename?: 'Mutation', updateImageOrder: Array<{ __typename?: 'AdvertisementImage', uuid: string }> };

export type DeleteImageMutationVariables = Types.Exact<{
  uuid: Types.Scalars['String']['input'];
  imageUuid: Types.Scalars['String']['input'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage: { __typename?: 'AdvertisementImage', name: string } };

export type UpdateAdvertisementMutationVariables = Types.Exact<{
  uuid: Types.Scalars['String']['input'];
  updateAdvertisementInput: Types.UpdateAdvertisementInput;
}>;


export type UpdateAdvertisementMutation = { __typename?: 'Mutation', updateAdvertisement: { __typename?: 'Advertisement', uuid: string } };

export const GetDetailDocument = gql`
    query getDetail($uuid: String!) {
  advertisement(uuid: $uuid) {
    uuid
    createdAt
    name
    description
    published
    price
    status
    video
    imageUrl
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
  export class GetDetailQueryService extends Apollo.Query<GetDetailQuery, GetDetailQueryVariables> {
    document = GetDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateImagesOrderDocument = gql`
    mutation updateImagesOrder($advertisementUuid: String!, $updateImagesOrderInput: [String!]!) {
  updateImageOrder(uuid: $advertisementUuid, ord: $updateImagesOrderInput) {
    uuid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateImagesOrderMutationService extends Apollo.Mutation<UpdateImagesOrderMutation, UpdateImagesOrderMutationVariables> {
    document = UpdateImagesOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteImageDocument = gql`
    mutation deleteImage($uuid: String!, $imageUuid: String!) {
  deleteImage(uuid: $uuid, imageUuid: $imageUuid) {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteImageMutationService extends Apollo.Mutation<DeleteImageMutation, DeleteImageMutationVariables> {
    document = DeleteImageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateAdvertisementDocument = gql`
    mutation updateAdvertisement($uuid: String!, $updateAdvertisementInput: UpdateAdvertisementInput!) {
  updateAdvertisement(
    uuid: $uuid
    updateAdvertisementInput: $updateAdvertisementInput
  ) {
    uuid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateAdvertisementMutationService extends Apollo.Mutation<UpdateAdvertisementMutation, UpdateAdvertisementMutationVariables> {
    document = UpdateAdvertisementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V extends OperationVariables> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

  interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

  interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class gqlApi {
    constructor(
      private getDetailQueryService: GetDetailQueryService,
      private updateImagesOrderMutationService: UpdateImagesOrderMutationService,
      private deleteImageMutationService: DeleteImageMutationService,
      private updateAdvertisementMutationService: UpdateAdvertisementMutationService
    ) {}
      
    getDetail(variables: GetDetailQueryVariables, options?: QueryOptionsAlone<GetDetailQueryVariables>) {
      return this.getDetailQueryService.fetch(variables, options)
    }
    
    getDetailWatch(variables: GetDetailQueryVariables, options?: WatchQueryOptionsAlone<GetDetailQueryVariables>) {
      return this.getDetailQueryService.watch(variables, options)
    }
    
    updateImagesOrder(variables: UpdateImagesOrderMutationVariables, options?: MutationOptionsAlone<UpdateImagesOrderMutation, UpdateImagesOrderMutationVariables>) {
      return this.updateImagesOrderMutationService.mutate(variables, options)
    }
    
    deleteImage(variables: DeleteImageMutationVariables, options?: MutationOptionsAlone<DeleteImageMutation, DeleteImageMutationVariables>) {
      return this.deleteImageMutationService.mutate(variables, options)
    }
    
    updateAdvertisement(variables: UpdateAdvertisementMutationVariables, options?: MutationOptionsAlone<UpdateAdvertisementMutation, UpdateAdvertisementMutationVariables>) {
      return this.updateAdvertisementMutationService.mutate(variables, options)
    }
  }