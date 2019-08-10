const Base = require('../base');
const Post = require("../model/post.schema");

class post extends Base {
    async addPost(data) {
        const newPost = await Post.create({
            title: data.title,
            body: data.body
        });

        console.log(newPost);

        return newPost;
    }
}

module.exports = post;