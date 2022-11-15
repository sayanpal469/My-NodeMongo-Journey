const http = require('http');
const port = 3000;
const hostName = `127.0.0.1`

const server = http.createServer((req, res) => {
    res.end('<h1>Hello Server</h1>')
})

server.listen(port, hostName, () => {
    console.log(`Server is running successfully at http://${hostName}:${port}`);
})