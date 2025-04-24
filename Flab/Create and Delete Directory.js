
const fs = require('fs')
fs.mkdir('testDir', err => {
    if (err) throw err;
    console.log('Directory created');

    fs.rmdir('testDir', err => {
        if (err) throw err;
        console.log('Directory deleted');
    });
});
