const os = require('os');
const http = require('http');

// Logging various OS module properties
console.log('Operating System Info:');
console.log('Platform      :', os.platform());
console.log('Architecture  :', os.arch());
console.log('CPU Cores     :', os.cpus().length);+
console.log('CPU Details   :', os.cpus());
console.log('Total Memory  :', os.totalmem(), 'bytes');
console.log('Free Memory   :', os.freemem(), 'bytes');
console.log('Home Directory:', os.homedir());
console.log('Uptime        :', os.uptime(), 'seconds');
console.log('Hostname      :', os.hostname());
console.log('Network Info  :', os.networkInterfaces());

// Creating an HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let info = `
===== OS Information =====
Platform     : ${os.platform()}
Architecture : ${os.arch()}
CPU Cores    : ${os.cpus().length}
Hostname     : ${os.hostname()}
Free Memory  : ${os.freemem()}
Total Memory : ${os.totalmem()}
Uptime       : ${Math.floor(os.uptime() / 60)} minutes
Home Dir     : ${os.homedir()}
`;

    res.end(info);
}).listen(4000, () => {
    console.log('✅ Server is running on http://localhost:4000');
});
