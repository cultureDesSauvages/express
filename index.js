const express = require("express");
const nodefetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Vercel!");
});

app.listen(port);
