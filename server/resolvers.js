import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    greeting: () => "Hello, world!",
  },
};

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
}
