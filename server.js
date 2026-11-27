const http = require('http');
const VERSION = 'Version 3';
const NAME = 'RK Onia';
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>' + VERSION + '</h1><p>' + NAME + '</p>');
}).listen(port);
