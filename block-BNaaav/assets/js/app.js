let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === '/'){
    fs.createReadStream('../../index.html').pipe(res);
  }else if(req.method === 'GET' && req.url === '/about'){
    fs.createReadStream('../../about.html').pipe(res);
  }
}

server.listen(5500, () => {
  console.log('Server is listening on port number 5500');
});