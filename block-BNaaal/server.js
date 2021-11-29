let http = require('http');

/*

http.createServer((req, res) => {
  
}).listen(4000, 'localhost');

*/

let server = http.createServer(handleServer);

function handleServer(req, res){
  res.end('welcome');
}

server.listen(4000, () => {
  console.log('server started');
});