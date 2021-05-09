const express = require("express");
const blogPostController = require("../controllers/BlogPostController");

const router = express.Router();

router
  .route("/")
  .get(blogPostController.getAllPosts)
  .post(blogPostController.createPost);

router
  .route("/:id")
  .get(blogPostController.getPost)
  .patch(blogPostController.updatePost)
  .delete(blogPostController.deletePost);

module.exports = router;
