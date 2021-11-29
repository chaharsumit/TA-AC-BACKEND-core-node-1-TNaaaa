let url = require('url');

let baseUrl = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;

let parsedUrl = url.parse(baseUrl, true);
console.log(parsedUrl);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
