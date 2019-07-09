const express = require("express");
const postRoutes = require("./routes/posts");
const app = express();

app.use(express.json());

app.use("/api/posts", postRoutes);

app.listen(4000, () => console.log("Server running at localhost:4000"));
