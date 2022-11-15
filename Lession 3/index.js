/*============= OS and Path ===============*/


const os = require('os');

// console.log(os.userInfo())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.type())
// console.log(os.getPriority())

// console.log(__dirname);

const path = require('path');

const extensionName = path.extname('index.js')
// console.log(extensionName)

const joinName = path.join(__dirname + '/hello')
const joinOneMore = path.join(__dirname + '/../world')
console.log(joinName);

