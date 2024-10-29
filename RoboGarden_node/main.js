// THE PATH MODULE
// the path module is a built-in module used 
// for providing utilities when working with 
// file and directory paths
const path = require('path');
const os = require('os');
const fs = require('fs');
const data = require('./module');

console.log(path.parse(__filename));
console.log(os.totalmem());
console.log(os.freemem());

console.log(data);
console.log(data.name);
data.meow('Darcey');
console.log(os.hostname());

// fs.readFile('promises.js', "utf-8", (error, data) => {
//     if(error) console.log('Error', error);
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync('promises.js', "utf8");
//     console.log(data);
// } catch(errors) {
//     console.log(errors);
// }










// parse is a function that used to parse a file
// by sending the file name as aparameter (an object)
// const x = path.parse(__filename);
// console.log(x);

// __filename is a variable that jas the full
// path of the current file or module
// console.log(__filename);

//  THE OS MODULE