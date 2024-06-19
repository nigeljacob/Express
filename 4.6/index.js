const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");

const app = express();

app.engine(
  "hbs",
  exhbs.engine({
    extname: ".hbs",
    defaultLayout: false,
  })
);

app.set("view engine", "hbs");

// Index page
app.get('/', function (req, res) {
  res.render('index');
});

// User page with dynamic userId parameters from url
app.get('/user/:userId', function (req, res) {
  const userId = req.params.userId; // This gets the userId from the request url
  res.render('user', { userId: userId });
});

// Hello page with username extracted from query parameters
// These are everything that comes after the "?" in a url
app.get('/hello', function (req, res) {
  const name = req.query.name || 'Anonymous User';
  console.log(`query parameters: `, req.query);
  res.render('hello', { username: name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
