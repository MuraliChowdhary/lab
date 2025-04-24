
const fs = require("fs")
fs.unlink('testDir/sample.txt', err => {
    if (err) console.log(err);
    else console.log('File in directory deleted');
});
