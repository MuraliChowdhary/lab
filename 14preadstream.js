import fs from  'fs';

// Create a read stream
const readStream = fs.createReadStream('input.txt');

// Create a write stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe the read stream to the write stream
readStream.pipe(writeStream);

console.log('Data is being read and written to output.txt');
