let http = require('http');
let fs = require('fs');
const path = require("path");


let server = http.createServer(handleRequest);

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === '/'){
    fs.createReadStream('../../index.html').pipe(res);
  }else if(req.method === 'GET' && req.url === '/about'){
    fs.createReadStream('../../about.html').pipe(res);
  }else if(req.url.split(".").pop() === "css"){
    res.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.createReadStream('../stylesheets/styles.css').pipe(res);
  }else if(req.url.split(".").pop() === 'jpg'){
    res.setHeader('Content-type', 'image/jpg');
    fs.createReadStream('../images').pipe(res);
  }
}

server.listen(5500, () => {
  console.log('Server is listening on port number 5500');
});