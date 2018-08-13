var express = require("express");
var path = require("path");

var githubRouter = require("./routes/github");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/github", githubRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

module.exports = app;
//
