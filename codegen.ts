import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clrrobrgd0gmd01urhngc3ytt/master',
  documents: ['src/graphql/queries.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    'src/graphql/generated/': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        }
      ],
      preset: 'client'
    }
  }
}

export default config
