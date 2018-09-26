const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send({
    name: "Rabel",
    likes: ["Hookah", "Drink"]
  });
});

app.get("/about", (req, res) => {
  res.send("About!");
});

app.get("/bad", (req, res) => {
  res.send({ errorMessage: "LePuff!!!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
