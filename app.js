const http = require("http");
const fs = require("fs");
const server = http.createServer(function(request, response) {
  console.log("client request URL: ", request.url); // this is how we do routing:

  if (request.url === "/cars") {
    fs.readFile("views/cars.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send data about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  } else if (request.url === "/stylesheets/style.css") {
    fs.readFile("./stylesheets/style.css", "utf8", function(errors,contents) {
      response.writeHead(200, { "Content-type": "text/css" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cars1.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars1.jpg', function(errors,contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cars2.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars2.jpg', function(errors,contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cars3.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars3.jpg', function(errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cats") {
    fs.readFile("views/cats.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send data about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  } else if (request.url === "/stylesheets/style.css") {
    fs.readFile("./stylesheets/style.css", "utf8", function(errors,contents) {
      response.writeHead(200, { "Content-type": "text/css" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cat1.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/cat1.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cat2.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/cat2.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/cat3.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/cat3.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cars/new") {
    fs.readFile("views/new.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send data about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }
  // request didn't match anything:
  else {
    response.writeHead(404);
    response.end("File not found!!!");
  }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");