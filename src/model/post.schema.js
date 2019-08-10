const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: String,
    body: String
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
