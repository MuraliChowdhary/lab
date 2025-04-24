const fs = require('fs')

fs.mkdir('dataDir', err => {
    if (err) throw err;
    fs.writeFile('dataDir/info.txt', 'Hello FSD Lab!', err => {
        if (err) throw err;
        console.log('Data written to file in directory');
    });
});
