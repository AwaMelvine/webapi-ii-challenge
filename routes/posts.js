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

    if (!body.title || !body.contents) {
      return res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    } else {
      const id = await Post.insert(body);
      res.status(201).json({ id });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "There was an error while saving the post to the database"
      });
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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const count = await Post.update(id, body);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to Update post" });
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

router.get("/:id/comments", async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Post.findPostComments(id);
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: "Could not get post comments" });
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const newComment = { ...body, post_id: id };
    const count = await Post.insertComment(newComment);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to save comment" });
  }
});

module.exports = router;
