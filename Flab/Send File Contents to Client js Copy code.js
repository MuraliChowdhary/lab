const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile(__dirname + '/message.txt', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
}).listen(5001, () => {
    console.log("Server running at http://localhost:5001");
});
