const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.send("Hello World!!!");
});

app.listen(port, () => console.log(`Listening on port:${port}`));
