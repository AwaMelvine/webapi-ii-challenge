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

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const id = await Post.insert(body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: "Could not save post to database" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: "Could not get post from database" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const count = await Post.remove(id);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
