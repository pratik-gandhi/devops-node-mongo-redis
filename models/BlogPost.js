const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog post must have a title"],
  },
  body: {
    type: String,
    required: [true, "Blog post must have a body"],
  },
  author: {
    type: String,
    required: [true, "Blog post must have an author"],
  },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
