var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === typeof b) {
        resolve(a + b);
      } else {
        reject("The parameters must be the same type.");
      }
    }, 1500);
  });
};

asyncAdd(6, 7)
  .then(r => {
    console.log(r);
    return asyncAdd(r, 4);
  })
  .then(r => {
    console.log(r);
  })
  .catch(e => console.log(e));

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Working!");
//     reject("LePuff!!");
//   }, 2500);
// });

// console.log("Start!");

// somePromise.then(message => console.log(message), error => console.log(error));
