const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(r => {
      res.send(r);
    })
    .catch(e => res.status(400).send(e));
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(e => res.status(400).send(e));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = { app };
