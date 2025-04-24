const http = require('http');

http.createServer((req, res) => {
    const data = {
        name: "Murali",
        course: "FSD"
    };

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(data))
    res.end();
}).listen(5004, () => {
    console.log("Server running at http://localhost:5004");
});

