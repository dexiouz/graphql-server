const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const post = require('./src/datasource/post');
const typeDefs = require("./src/type");
const resolvers = require("./src/resolvers");

const PORT = 4000;
const URI = "mongodb://localhost:27017/gql-server";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log("App connected to DB..."))
  .catch(err => console.error(`Error: ${err}`));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {

  },
   dataSources: ()=> {
       return {
           post
       }
   }
  // For authentication
  // context: async ({ req }) => {
  //   const header = req.header["Authorization"];

  //   const token = header.split(" ")[1];

  //   const user = await getAuthUser(token);

  //   if (user) {
  //     // pass the token to the children
  //     return { user };
  //   } else {
  //     throw new Error("You are not authorized for this request");
  //   }
  // }
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
