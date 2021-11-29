let http = require('http');
let url = require('url');

let server = http.createServer(handleRequest);

let postData = {
  message : 'This is a post request',
}

function handleRequest(req, res){
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;
  console.log(req.method, req.url, parsedUrl);
  if(req.method === 'GET' && pathName === '/'){
    res.write('welcome to home page');
    res.end();
  }else if(req.method === 'GET' && pathName === '/about'){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>This is all about NodeJS</h2>')
  }else if(req.method === 'POST' && pathName === '/about'){
    res.setHeader('Content-Type' ,'application/json');
    res.end(postData);
  }
}

server.listen(3001, () => {
  console.log('server has started listening');
});