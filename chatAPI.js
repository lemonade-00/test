//chatAPI.js
const http = require('http');
const url = require('url');
const fs = require('fs');

// TODO

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path = url.parse(req.url, true).pathname;
    console.log("Request:" + path);
    if (path == "/") {
        res.end();
    } else if (path == "/chat") {
        res.end();
    } else if (path == "/save") {
        res.end();
    } else if (path == "/reload") {
        res.end();
    }
    else {
        res.end();
    }
}).listen(3000);