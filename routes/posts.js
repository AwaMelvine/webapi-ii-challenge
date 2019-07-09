const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send({ message: "getting it all" });
});

module.exports = router;
