const { gql } = require("apollo-server");

const userDefs = gql`
  type User {
    name: String
    role: [String]
    posts: [Posts]
  }

  enums Roles {
    AMDIN,
    EDITOR,
    MARKETER,
    MEMBER,
    VISIOR
  }
`;

module.exports = userDefs;
