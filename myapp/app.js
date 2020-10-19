const express = require("express");
const helmet = require("helmet");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.post("/soap", (req, res) => {
  res.send("prosty tekst - soap");
});

app.post("/rest", (req, res) => {
  res.send("prosty tekst - rest");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// node ./app.js - start serwera w terminalu
