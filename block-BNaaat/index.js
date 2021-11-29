let http = require('http');
let fs = require('fs');
const { url } = require('inspector');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === '/node'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if(err){
        console.log(err);
      }
      res.end(content);
    });
  }
}

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === '/node'){
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('server has started to listen');
});