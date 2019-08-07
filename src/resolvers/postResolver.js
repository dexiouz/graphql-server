const Post = require("../schema/post.schema");

const postResolvers = {
  Query: {
    getAllPosts: async (parent, fields, context, info) => {
      // if (context.user) return Post.find({})
      return await Post.find({});
    },

    getPost: async (_, { _id }, context) => {
      return await Post.findById(_id);
    }
  },

  Mutation: {
    addPost: async (_, { data }, { user }) => {
      console.log(data);
      const newPost = await Post.create({
        title: data.title,
        body: data.body
      });

      console.log(newPost);

      return newPost;
    },

    updatePost: async (_, { data }, { user }) => {
      const updatedPost = await Post.updateOne(
        { _id: data.id },
        {
          body: data.body
        }
      );

      return updatedPost;
    }
  }
};

module.exports = postResolvers;
