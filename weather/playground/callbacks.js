var getUser = (id, callback) => {
  var user = {
    id,
    name: "Rabel"
  };

  if (callback instanceof Function) {
    callback(user);
  }
};

getUser(1,u => console.log(u));
