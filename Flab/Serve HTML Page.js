const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile(__dirname + "/index.html", (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("File not found!");
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8081);

console.log("Server running at http://localhost:8081/");
