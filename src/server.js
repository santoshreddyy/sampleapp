var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, Welcome to DevOps CI CD using jenkins on ...ec2");

});

var port = 3001;
server.listen(port);
module.exports = server
console.log("Server is available on Port:", port);
