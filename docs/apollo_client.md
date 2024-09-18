### Integrating graphql queries on client

1. Install apollo client

```shell
npm i @apollo/client
```

2. Initialize apollo client

```js
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
});
```

### making queries and mutations from apollo client

```js
const result = apolloClient.query({
  query: "<QUERY_NAME>",
  variables: {},
});
```

```js
const { data } = await apolloClient.mutate({
  mutation: "<MUTATION_NAME>",
  variables: { id },
});
```

### Apollo client fetch policies

Apollo client caches queries by default

https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy

**Setting fetch-policy for a single query**

```js
const result = apolloClient.query({
  query: <QUERY>,
  variables: {},
  fetchPolicy: "network-only",
});
```

**Setting fetch-policy for a all queries**

```js
const apolloClient = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
});
```

### Updating apollo cache

```js
const { data } = await apolloClient.mutate({
  mutation: <MUTATION>,
  variables: { input: course },
  update: (cache, { data }) => {
    cache.writeQuery({
      query: GET_COURSE,
      variables: { },
      data,
    });
  },
});
```
