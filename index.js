const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello From The Server!');
});

server.listen(8000);
