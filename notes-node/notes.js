console.log("Starting notes.js!");

const fs = require("fs");

const noteFileName = "note-data.json";

var add = (title, body) => {
  var notes = getAll();
  var exists = notes.filter(n => n.title === title).length;

  if (exists < 1) {
    var note = { title, body };
    notes.push(note);
    fs.writeFileSync(noteFileName, JSON.stringify(notes));
    return note;
  }
};

var getAll = () => {
  var notes = fs.existsSync(noteFileName) ? fs.readFileSync(noteFileName) : "";

  try {
    notes = notes.length > 0 ? JSON.parse(notes) : [];
  } catch (e) {
    notes = [];
  }

  return notes;
};

var get = title => {
  var notes = getAll();
  var note = notes.filter(n => n.title === title);

  if (note.length > 0) {
    return note[0];
  }
};

var remove = title => {
  var note = get(title);

  if (note) {
    var notes = getAll();
    var newNotes = notes.filter(n => n.title !== title);
    fs.writeFileSync(noteFileName, JSON.stringify(newNotes));
    return note;
  }
};

module.exports = {
  add,
  getAll,
  get,
  remove
};
