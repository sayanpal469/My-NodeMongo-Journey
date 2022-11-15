const fs = require('fs');
const http = require('http');
const port = 3000;
const host = `127.0.0.1`

// fs.writeFile('http req, res', 'How to write res type and statuas code', (err) => {
//     if(err) {
//         console.log(err)
//     } else{
//         console.log('Successfull');
//     }
// })


const server = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type': 'text/html'})
    res.write('<h1>Hello Server</h1>')
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})