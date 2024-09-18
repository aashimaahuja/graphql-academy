### Working with types in Graphql

1. Install `graphql-codegen`

```shell
npm i @graphql-codegen/cli @graphql-codegen/client-preset
```

```shell
npx graphql-codegen init
```

2. Change imports of gql from generated folder

```shell
import { gql } from "@/generated";

export const GET_COURSES = gql(`
  query Courses {
    courses {
      id
      title
      description
    }
  }
`);
```

3. Specify types of Query and Arguments

```shell
const { loading, data, error } = useQuery<CoursesQuery>(GET_COURSES);
```

4. Turn off typename while generating type

codegen.json

```js
"config": {
    "skipTypename": true
  }
```

5. Turn off fragment masking

codegen.json

```js
 "presetConfig": {
    "fragmentMasking": false
}
```

### Adding syntax highlighting and autocomplete while writing queries

```shell
npm i -D @0no-co/graphqlsp


```

Add in tsconfig.json plugins

```js
{
    "name": "@0no-co/graphqlsp",
    "schema": "./server/schema.graphql"
}
```

Add in vscode settings.json

```js
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}

```
