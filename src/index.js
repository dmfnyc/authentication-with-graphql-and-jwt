import express from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import sessionMiddleware from './sessionMiddleware';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();
app.use(cookieParser());
app.use(sessionMiddleware);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    session: req.session,
  }),
  playground: {
    settings: {
      'request.credentials': 'include',
    },
  },
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
