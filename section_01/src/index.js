import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server listening on url ${url}graphql`);
});
