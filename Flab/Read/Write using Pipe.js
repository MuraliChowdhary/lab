const fs = require('fs');
const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('copy.txt');

reader.pipe(writer);
