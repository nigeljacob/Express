const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
