const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const test = Number(input.shift());

function factorial(num){
  if(num <= 1) return 1;
  return num * factorial(num - 1);
}

for (let i = 0; i < test; i++){
  const [n, m] = input[i].split(' ').map(Number);
  console.log(Math.round((factorial(m)/(factorial(n)*factorial(m-n)))));
}