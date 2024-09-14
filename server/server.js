import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { resolvers } from "./resolvers.js";
import { readFile } from "node:fs/promises";
import { createInstructorLoader } from "./db/instructors.js";
import express from "express";

const PORT = 9000;
const app = express();
app.use(express.json());

const typeDefs = await readFile("./schema.graphql", "utf8");

async function getContext() {
  const instructorLoader = createInstructorLoader();
  const context = { instructorLoader };
  return context;
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer, { context: getContext }));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
