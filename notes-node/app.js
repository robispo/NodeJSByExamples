console.clear();
console.log("Starting App!!");

const fs = require("fs");

const yargs = require("yargs");
const _ = require("lodash");

const notes = require("./notes");

const notesArgs = yargs.argv;
const command = notesArgs._[0];

switch (command) {
  case "add":
    var note = notes.add(notesArgs.title, notesArgs.body);
    if (note) {
      console.log(note);
    } else {
      console.log("Note already exists.");
    }
    break;
  case "list":
    var notesAll = notes.getAll();
    console.log(notesAll);
    break;
  case "read":
    var note = notes.get(notesArgs.title);
    if (!_.isEmpty(note)) {
      console.log(note);
    } else {
      console.log("Note does not exist.");
    }
    break;
  case "remove":
    var note = notes.remove(notesArgs.title);
    if (!_.isEmpty(note)) {
      console.log(note);
    } else {
      console.log("Note does not exist.");
    }
    break;
  default:
    console.log("Command not recognized");
    break;
}
