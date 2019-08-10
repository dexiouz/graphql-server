// const Post = require("../model/post.schema");

const postMutation = {
    addPost: async (parent, {data}, {dataSources}, info) => {
        const {post} = dataSources
        const savePost = await new post().addPost(data)
        return savePost;
    },

    updatePost: async (_, {data}, {user}) => {
        const updatedPost = await Post.updateOne(
            {_id: data.id},
            {
                body: data.body
            }
        );

        return updatedPost;
    }

};

module.exports = postMutation;
