import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String
      age: Int
      average: Float
      married: Boolean
      friends: [String!]
    }
  `,
  resolvers: {
    Query: {
      id: () => '1fx2f3gdsg',
      name: () => 'John Doe',
      age: () => 42,
      average: () => 51.14,
      married: () => true,
      friends: () => ['John', 'Jane', 'Jack'],
    },
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server listening on url ${url}graphql`);
});
