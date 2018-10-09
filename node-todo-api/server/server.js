const mongoose = require("mongoose");

const dbName = "TodoApp";
const port = process.env.PORT || 27017;
const url = `mongodb://localhost:${port}/${dbName}`;
const mdOptions = { useNewUrlParser: true };

mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  mdOptions
);

var Todo = mongoose.model("Todo", {
  text: { type: String },
  completed: { type: Boolean },
  completedAt: { type: Number }
});

// var newTodo = new Todo({
//   text: "Buy some food"
// });
var newTodo = new Todo({
  text: "finish work",
  completed: true,
  completedAt: 1
});

newTodo
  .save()
  .then(r => console.log(r))
  .catch(e => console.log(e));
