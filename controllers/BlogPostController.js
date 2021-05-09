const blogPostService = require("../services/BlogPostService");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostService.findAllPosts();
    return res.status(200).json({ data: { posts } });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await blogPostService.findPost(req.params.id);
    return res.status(200).json({ data: { post } });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await blogPostService.createPost(req.body);
    return res.status(201).json({ data: { post } });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await blogPostService.updatePost(req.params.id, req.body);
    return res.status(201).json({ data: { post } });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await blogPostService.deletePost(req.params.id);
    return res.status(200).json({ data: {} });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
