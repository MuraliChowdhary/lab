import fs from 'fs';
import http from 'http';
// Create an HTTP server
const server = http.createServer((req, res) => {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
