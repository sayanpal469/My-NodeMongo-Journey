/*================ fs module===============*/


const fs = require('fs');

// fs.writeFile('demo1', 'Hello I am Sayan Paul', (err) => {
//     if(err){
//         console.log(err.message)
//     } else{
//         console.log('Succesful');
//     }
// })

// fs.appendFile('demo1', 'demo2', (err) => {
//     if(err){
//         console.log(err.message)
//     } else{
//         console.log('Succesful');
//     }
// })

// fs.rename('demo2', 'demo', (err) => {
//     if(err){
//         console.log(err.message)
//     } else{
//         console.log('Succesful');
//     }
// })

// fs.readFile('demo', 'utf8', (err, data) => {
//     if(err){
//         console.log(err.message)
//     } else{
//         console.log(data);
//     }
// })


// fs.unlink('demo',(err) => {
//     if(err){
//         console.log(err.message)
//     } else{
//         console.log('Delete Sucessfull');
//     }
// })


fs.rename('Demo', 'fs module', (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('Successful');
    }
})