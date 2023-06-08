// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

// Use the createServer() method to create an HTTP server:

// var http = require("http");

//create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World! How are you"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end(); 
  })
  .listen(8080);
