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

module.exports = {
  mongoose
};
