const http = require('http');
const array = ['Hello', 'World'];
const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  if (pathname === '/helloworld') {
    res.setHeader('Content-Type', 'text/plain');
    res.end(array.join(' ') + '!');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});