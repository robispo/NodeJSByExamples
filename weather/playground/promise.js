var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Working!");
    reject("LePuff!!");
  }, 2500);
});

console.log("Start!");

somePromise.then(message => console.log(message), error => console.log(error));
