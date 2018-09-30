var add = (a, b) => a + b;
var square = x => x * x;
var setName = (user, fullName) => {
  var name = fullName.split(" ");
  user.firstName = name[0];
  user.lastName = name[1];
  return user;
};

module.exports = {
  add,
  square,
  setName
};
