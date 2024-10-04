const express = require("express"); // imports the express module

const app = express(); // initialises app

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.json({
    name: "ben",
    password: "jeff",
  });
});

app.listen(3000);
