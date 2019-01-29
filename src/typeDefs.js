import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    currentUser: User
  }

  type Mutation {
    login(email: String!, password: String!): User
  }
`;

export default typeDefs;
