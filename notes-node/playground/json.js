const fs = require("fs");

var originalNote = {
  title: "oko",
  body: "lkkok"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj.title);
