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

// Hello page - Sam
app.get('/hello-sam', function (req, res) {
  res.render('hello', {username: "Sam"});
});

// Hello page - Sue
app.get('/hello-sue', function (req, res) {
  res.render('hello', {username: "Sue"});
});

// Hello page - Tom
app.get('/hello-tom', function (req, res) {
  res.render('hello', {username: "Tom"});
});
// Hello page - Jerry
app.get('/hello-jerry', function (req, res) {
  res.render('hello', {username: "Jerry"});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
