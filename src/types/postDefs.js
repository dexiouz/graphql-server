const { gql } = require("apollo-server");

const postDefs = gql`
  type Post {
    title: String!
    body: String
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    getAllPosts: [Post]
    getPost(_id: ID): Post
  }

  extend type Mutation {
    addPost(data: postInput): Post
    updatePost(data: updatePostInput): Post
  }

  input postInput {
    title: String!
    body: String
  }

  input updatePostInput {
    id: ID!
    body: String
  }
`;

module.exports = postDefs;
