console.log('welcome to node');

function sum(){
  let sum = 0;
  for(let i = 0; i <= 10; i++){
    sum += i;
  };
  return sum;
}

console.log(sum());