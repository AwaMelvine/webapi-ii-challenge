const { Router } = require("express");
const Post = require("../data/db");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch posts from database" });
  }
});

module.exports = router;
