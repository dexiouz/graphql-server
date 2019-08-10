const { gql } = require('apollo-server');
const postDefs = require('./types/postDefs');
// const GraphQLJSON = require('graphql-type-json');
const linkSchema = gql`
    #scalar JSON
    type Mutation {
        _: Boolean
    }
    type Query {
      _: Boolean
    }
`;

module.exports = [
    linkSchema,
    postDefs
];