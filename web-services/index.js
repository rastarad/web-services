const yup = require("yup");
const express = require("express");
const helmet = require("helmet");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

let schema = yup.object().shape({
  name: -yup
    .string()
    .trim()
    .max(10)
    .matches(/^[a-zA-Z]+$/)
    .required(),
});

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

//zad.1
app.get("/info", (req, res) => {
  res.status(200);
  res.json({ author: "1234123" });
});

//zad.2
app.get("/hello/:name", (req, res) => {
  schema.isValid(req.params).then(function (valid) {
    if (valid) res.send(`Hello ${req.params.name}!`);
    else {
      res.status(400);
      res.send("Name is not valid");
    }
  });
});

//zad.3
var tab = [];
app.post("/store", function (req, res) {
  tab.push(req.body.input);
  res.status(201);
  res.json({ stored_data: tab });
});

console.log("test");

// node ./index.js - [stary] start serwera w terminalu
// ctrl + c - zatrzymaj serwer
// nodemon - npm run dev [nowy] start serwera
