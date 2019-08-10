const postMutation = require('./resolvers/postMutation');
const postResolverQuery = require('./resolvers/postResolver');
module.exports = {
    Query: {
        ...postResolverQuery
    },
    Mutation: {
        ...postMutation
    }
};