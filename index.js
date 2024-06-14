const express = require("express");


const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Vercel!");
});
app.get("/toto", (req, res) => {

fetch("https://google.com")
  .then((response) => {
    res.send(response);
  })
  .catch(function (err) {
    res.send("Unable to fetch -");
  });
  
 
  res.send("Hello toto!");
});

app.listen(port);
