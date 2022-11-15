/*================ Local module ================*/



// const n = require('./Export');

// console.log(n.myName('Sayan'), n.mySurName('Paul'));

const {myName, mySurName} = require('./Export');

console.log(myName('Sayan'), mySurName('Paul'))
let sum = 6 + '3' + 4 + 2 
console.log(sum);