const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Home Page');
    } else if (req.url === '/about') {
        res.write('About Page');
    } else {
        res.write('404 Not Found');
    }
    res.end();
}).listen(7000);
