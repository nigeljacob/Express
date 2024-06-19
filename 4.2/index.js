const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send("<p><h1>Hello from server</h1></p>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
