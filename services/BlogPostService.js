const BlogPost = require("../models/BlogPost");

const findAllPosts = async () => {
  try {
    const posts = await BlogPost.find();
    return posts;
  } catch (err) {
    console.error(`Error occurred when fetching all posts : ${err}`);
    throw err;
  }
};

const findPost = async (id) => {
  try {
    return await BlogPost.findById(id);
  } catch (err) {
    console.error(
      `Error occurred when fetching post with id : ${id} : error : ${err}`
    );
    throw err;
  }
};

const createPost = async (post) => {
  try {
    post.id = null;
    return await BlogPost.create(post);
  } catch (err) {
    console.error(
      `Error occurred when creating post : ${post} : error : ${err}`
    );
    throw err;
  }
};

const updatePost = async (id, newPost) => {
  try {
    newPost.id = null;
    return await BlogPost.findByIdAndUpdate(id, newPost, {
        runValidators: true,
        new: true // returns modified document, instead of original
    });
  } catch (err) {
    console.error(
      `Error occurred when updating post with id : ${id} with contents ${newPost} : error : ${err}`
    );
    throw err;
  }
};

const deletePost = async (id) => {
  try {
    return await BlogPost.findOneAndDelete(id);
  } catch (err) {
    console.error(
      `Error occurred when deleting post with id : ${id} : error : ${err}`
    );
    throw err;
  }
};

module.exports = {
  findAllPosts,
  findPost,
  createPost,
  updatePost,
  deletePost,
};
