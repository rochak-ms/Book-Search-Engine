const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    title: String
  }
  input inputBook {
    authors: [String]
    description: String
    title: String
    bookId: ID
    image: String
    link: String
    title: String
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: inputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
