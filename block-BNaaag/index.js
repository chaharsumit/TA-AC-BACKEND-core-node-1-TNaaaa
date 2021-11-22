let fs = require('fs');


fs.readFile('./content.md', (err,data) => {
  if(err){
    throw err;
  }
  console.log(data.toString());
});


let syncCodeResult = fs.readFileSync('./content.md');

let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
console.log(buff1);
console.log(buff1.toString());