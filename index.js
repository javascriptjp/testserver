const http = require('http');
const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end('<body><style>body{background-color:#141414;}</style>{ Hello World. }</body>');
}).listen(8080);
