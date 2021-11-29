let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  console.log(req.headers);
  console.log(req.methods, req.url);
  res.end('Hello World!');
};

server.listen(3000, () => {
  console.log('server has started');
});