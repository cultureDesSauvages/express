const express = require("express");
const nodefetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Vercel!");
});
app.get("/toto", (req, res) => {
  res.send("Hello toto!");
});

app.listen(port);
