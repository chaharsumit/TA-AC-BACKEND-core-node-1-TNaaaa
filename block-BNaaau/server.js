let http = require('http');
let url = require('url');

let baseUrl = `/users?email=nodeserver@gmail.com`;

let parsedUrl = url.parse(baseUrl);
console.log(parsedUrl.pathname);

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let email = parsedUrl.query;
  console.log(req.url, parsedUrl.pathname);
  res.setHeader('Content-Type', 'application/json');
  res.end(email);
}

server.listen(3232, () => {
  console.log('server is listening');
});