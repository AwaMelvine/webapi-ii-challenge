const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the api" });
});

app.listen(4000, () => console.log("Server running at localhost:4000"));
