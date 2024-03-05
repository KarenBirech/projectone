const express = require("express");
//create the server/app
const app = express();
//define the server routes
//templating language - ejs
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
//start/run your app
app.listen(8003, () => console.log("app is running on port 8003"));
//explicit and implicit return with arrow functions.
