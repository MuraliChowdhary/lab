const fs = require('fs');
fs.unlink('sample.txt', err => {
    if (err) console.log('Error:', err);
    else console.log('File deleted');
});
