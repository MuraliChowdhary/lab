const fs = require('fs');

fs.unlink('myDir/file.txt', err => {
    if (err) throw err;
    fs.rmdir('myDir', err => {
        if (err) throw err;
        console.log('File and directory deleted');
    });
});
