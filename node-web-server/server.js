const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

var getYear = () => new Date().getFullYear();

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    year: getYear(),
    welcomeMessage:
      "Welcome to a my first page with Node, Express & HBS view engine."
  });
});

app.get("/about", (req, res) => {
  //   res.send("About!");
  res.render("about", {
    title: "About page",
    year: getYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({ errorMessage: "LePuff!!!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
