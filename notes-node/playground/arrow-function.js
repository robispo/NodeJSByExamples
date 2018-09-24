console.clear();

var square = x => x * x;

console.log(square(9));

var user = {
  name: "Rabel",
  sayHi: () => console.log(`Hi ${this.name}`),
  sayHiAlt() {
    console.log(`Hi ${this.name}`);
    console.log('Parameters: ',arguments);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3,4);
