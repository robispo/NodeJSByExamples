console.log("Starting App!");

const fs = require("fs");
const os = require("os");

var user = os.userInfo();

fs.appendFile("greetings.txt", `Hello ${user.username}!`, e => console.log(e));
