const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/hello", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/hello.html"))
});


app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});


app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/blog.html"));
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
