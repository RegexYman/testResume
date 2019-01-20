var express = require("express");
var swig = require("swig");
var path = require("path");
//create a new instance of express and save it in a variable called app
var app = express();

app.use(express.static("public"));
//save the port globally
var port = 8080;

//we need now to define routes for our web server
//first any requests that comes to the root serve this function
//note that this is an asynchronous code
//note that a call back function has been passed which receives two variables
//req which contains client request information
//res which is the response we will send to the client
app.get("/", function(req, res) {
  //our response will be just a string Hello World
  var template = swig.compileFile(__dirname + "/public/html/cv.html");
  //apply any template variables, currently we have none
  var output = template({});

  //send the output to client
  res.send(output);
});

app.listen(port);
