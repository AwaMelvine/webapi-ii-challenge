const { Router } = require("express");
const Post = require("../data/db");

const router = new Router();

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
});

module.exports = router;
