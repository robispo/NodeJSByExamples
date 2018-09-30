const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  setTimeout(() => {
    resp.send("Hello World!!!");
  }, 100);
});

app.listen(port, () => console.log(`Listening on port:${port}`));
module.exports.app = app;
