//Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;
const server = http.createServer(function(request, response) {
    // console.log(request.url);
    const path = url.parse(request.url, true);
    // console.log(path);
    // console.log(path.pathname);
    // console.log(path.query);
    if (path.pathname == "/") {
        fs.readFile("./index.html", function(err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    } else if (path.pathname == "/about") {
        fs.readFile("./about.html", function(err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    } else if (path.pathname == "/contact") {
        fs.readFile("./contact.html", function(err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    } else if (path.pathname == "/api") {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        // response.write(JSON.stringify(path.query));
        response.write(JSON.stringify({ name: "John Doe", age: 30 }));
        response.end();
    } else {
        fs.readFile("./404.html", function(err, data) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    }
});
server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});
