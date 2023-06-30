const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const postsDir = path.join(__dirname, "public", "posts");

app.get("/posts", (req, res) => {
  fs.readdir(postsDir, (err, files) => {
    if (err) {
      console.error("Error reading Markdown files:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ files });
    }
  });
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
