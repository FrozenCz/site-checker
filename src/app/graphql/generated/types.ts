export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Advertisement = {
  __typename?: 'Advertisement';
  /** Images of advertisement */
  advertisementImages?: Maybe<Array<AdvertisementImage>>;
  /** Created at */
  createdAt: Scalars['String']['output'];
  /** Description of advertisement */
  description: Scalars['String']['output'];
  /** Main image */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Map from google */
  map: Scalars['String']['output'];
  /** Name of advertisement */
  name: Scalars['String']['output'];
  /** Price */
  price: Scalars['Float']['output'];
  /** If advertisement is published */
  published: Scalars['Boolean']['output'];
  /** Status */
  status: Scalars['String']['output'];
  /** Updated at */
  updatedAt: Scalars['String']['output'];
  /** uuid */
  uuid: Scalars['ID']['output'];
  /** Videos from youtube, separated by ; */
  video: Scalars['String']['output'];
};

export type AdvertisementImage = {
  __typename?: 'AdvertisementImage';
  /** Base image url */
  imageUrl: Scalars['String']['output'];
  /** Base image name */
  name: Scalars['String']['output'];
  /** Order */
  order: Scalars['Float']['output'];
  /** Image id */
  uuid: Scalars['String']['output'];
};

export type CreateAdvertisementInput = {
  /** Advertisement name */
  name: Scalars['String']['input'];
};

export type CreateTestSourceInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdvertisement: Advertisement;
  createTestSource: TestSource;
  deleteImage: AdvertisementImage;
  removeAdvertisement: Advertisement;
  removeTestSource: TestSource;
  updateAdvertisement: Advertisement;
  updateImageOrder: Array<AdvertisementImage>;
  updateTestSource: TestSource;
};


export type MutationCreateAdvertisementArgs = {
  createAdvertisementInput: CreateAdvertisementInput;
};


export type MutationCreateTestSourceArgs = {
  createTestSourceInput: CreateTestSourceInput;
};


export type MutationDeleteImageArgs = {
  imageUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemoveAdvertisementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTestSourceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAdvertisementArgs = {
  updateAdvertisementInput: UpdateAdvertisementInput;
  uuid: Scalars['String']['input'];
};


export type MutationUpdateImageOrderArgs = {
  ord: Array<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};


export type MutationUpdateTestSourceArgs = {
  updateTestSourceInput: UpdateTestSourceInput;
};

export type Query = {
  __typename?: 'Query';
  advertisement: Advertisement;
  advertisements: Array<Advertisement>;
  testSource: TestSource;
  testSources: Array<TestSource>;
};


export type QueryAdvertisementArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryAdvertisementsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTestSourceArgs = {
  id: Scalars['Int']['input'];
};

export type TestSource = {
  __typename?: 'TestSource';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
  /** uuid */
  uuid: Scalars['ID']['output'];
};

export type UpdateAdvertisementInput = {
  description: Scalars['String']['input'];
  map: Scalars['String']['input'];
  /** Advertisement name */
  name?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  published: Scalars['Boolean']['input'];
  status: Scalars['String']['input'];
  video: Scalars['String']['input'];
};

export type UpdateTestSourceInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};
