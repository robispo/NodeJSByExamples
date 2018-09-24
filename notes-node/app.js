const fs = require("fs");

const yargs = require("yargs");
const _ = require("lodash");

const notes = require("./notes");

const title = {
  describe: "The title of the note",
  demand: true,
  alias: "t"
};
const body = {
  describe: "The body of the note",
  demand: true,
  alias: "b"
};

const notesArgs = yargs
  .command("add", "Add a note", { title, body })
  .command("read", "Read a note", { title })
  .command("remove", "Remove a note", { title })
  .command("list", "List of all notes")
  .help().argv;
const command = notesArgs._[0];

switch (command) {
  case "add":
    var note = notes.add(notesArgs.title, notesArgs.body);
    if (note) {
      notes.printNote(note);
    } else {
      console.log("Note already exists.");
    }
    break;
  case "list":
    var notesAll = notes.getAll();
    console.log(`Printing ${notesAll.length} note(s).`);
    notesAll.forEach(n => notes.printNote(n));
    break;
  case "read":
    var note = notes.get(notesArgs.title);
    if (note) {
      notes.printNote(note);
    } else {
      console.log("Note does not exist.");
    }
    break;
  case "remove":
    var note = notes.remove(notesArgs.title);
    if (note) {
      notes.printNote(note);
    } else {
      console.log("Note does not exist.");
    }
    break;
  default:
    console.log("Command not recognized");
    break;
}
