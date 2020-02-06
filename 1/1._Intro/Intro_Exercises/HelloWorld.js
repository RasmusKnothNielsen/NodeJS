// Load the http module and save it in the constant http
const http = require('http');

// Define where the webserver is going to be
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Define the header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Define the body
    res.end('Hello World');
});

// When starting up, output the following to console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});