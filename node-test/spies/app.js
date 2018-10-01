var db = require("./db");

var handleSingup = (email, password) => {
  //
  db.saveUser({ email, password });
  //
};

module.exports = {
  handleSingup
};
