const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/**
 * Configuring server host and port
 */
app.set("port", process.env.PORT || 8080);

/* Parser that are supposed to be inited */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var oneDay = 24 * 60 * 60 * 1000;
var oneYear = oneDay * 365;
var assetMaxAge = oneYear;

app.use(express.static(path.join(__dirname, 'dist'), { maxAge: assetMaxAge, redirect: false }));

//Create HTTP server
const server = http.createServer(app);

//Listen on provided port
server.listen(app.get("port"), function() {
  console.info("Express server started on port " + app.get("port") + "...");
  console.info("Environment: " + app.get("env"));
});

module.exports = app;
