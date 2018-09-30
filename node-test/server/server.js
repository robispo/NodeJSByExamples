const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.status(404).send({
    error: "Page not found.",
    message: "Not page."
  });
});

app.get("/users", (req, resp) => {
  resp.send([{ name: "Rabel", age: 29 }, { name: "Wilmy", age: 24 }]);
});

app.listen(port, () => console.log(`Listening on port:${port}`));
module.exports.app = app;
