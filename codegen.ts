import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: 'http://localhost:3104/graphql',
  documents: './src/**/*.graphql',
  generates: {
    'src/app/graphql/generated/schema.gql': {
      plugins: ['schema-ast']
    },
    'src/app/graphql/generated/types.ts':{
      plugins: ['typescript']
    },
    'src/app': {
      plugins: ['typescript-operations', 'typescript-apollo-angular'],
      preset: "near-operation-file",
      presetConfig: {
        extension: '.api.ts',
        baseTypesPath: './graphql/generated/types.ts'
      },
      config: {
        querySuffix: 'QueryService',
        mutationSuffix: 'MutationService',
        subscriptionSuffix: 'SubscriptionService',
        declarationKind: 'interface',
        sdkClass: true,
        serviceName: 'gqlApi'
      }
    },
  }
}
export default config
