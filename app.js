const express = require("express");
const png = require("./text2image.js");
let app = express();

app.get("/hello.txt", function(req, res) {
  console.log("req", req.query);
  res.send("Hello World");
});

const server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
