const port = process.env.PORT || 80
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
server.listen(port);
console.log('Server running at port http://52.90.113.2:'+port+'/helloworld');