// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
        bookid: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: User
    }

    input savedBook{
        description: String
        title: String
        bookid: String
        image: String
        link: String
        authors:[String]
    }

    type Mutations {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookid: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    } 
`;


// export the typeDefs
module.exports = typeDefs;