const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");

const app = express();

app.engine(
  "hbs",
  exhbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");

app.use(express.static("public"))

// Index page
app.get('/', function (req, res) {
  res.render('index')
});


// User page with dynamic userId parameters from url
// The '?' means we may not receive this parameter; (eg: localhost:3000/user) but we should still render the route.
app.get('/users/:userId?', function (req, res) {
  const users = [
    { userId: 1, name: 'John', email: 'john@example.com' },
    { userId: 2, name: 'Jack', email: 'jack@example.com' },
    { userId: 3, name: 'Sara', email: 'sara@example.com' },
    { userId: 4, name: 'Lily', email: 'lily@example.com' },
    { userId: 4, name: 'Susan', email: 'susan@example.com' },
  ]
  // Get the userId from the request url
  const userId  = req.params.userId; 
  
  // Filter the users array for a matching user by ID. 
  var user = users.find((u) => u.userId.toString() === userId) // Note that the 'userId' parameter will be a string, not an integer.
  console.log(`userId: `, userId);
  console.log(`user: `, user);
  res.render('user', {user: user});
});

// Hello page with username extracted from query parameters
// These are everything that comes after the "?" in a url
app.get('/hello', function (req, res) {
  const name = req.query.name || "Anonymous User" 
  console.log(`query parameters: `, req.query);
  res.render('hello', {username: name});
});

// // About page
// app.get("/about", function (req, res) {
//   res.render("about");
// });

// // blogs page
// app.get("/blog", function (req, res) {
//   res.render("blog");
// });

// A page with an image
app.get('/kitten', function (req, res) {
  res.render('centered-image', {
    imagePath: 'kitten.jpg',
    description: 'A cute kitten',
  });
});


// A page with an image
app.get('/dog', function (req, res) {
  res.render('centered-image', {
    imagePath: 'dog.jpg',
    description: 'A cute dog',
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
