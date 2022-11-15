const http = require('http');
const fs = require('fs');
const PORT = 3000;
const HOST = `127.0.0.1`;

const myServer = http.createServer((req, res) => {

    const handelRoute = (statusCode,html) => {
        fs.readFile(html, (err, data) => {
            res.writeHead(statusCode, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    }


    if (req.url == '/') {
        handelRoute(202,'index.html')
    } else if (req.url == '/about') {
        handelRoute(202,'about.html')
    } else if (req.url == '/contact') {
        handelRoute(202,'contact.html')
    } else {
        handelRoute(404, 'error.html')
    }
})

myServer.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`)
})