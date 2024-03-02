const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let divisor = [];
function findDivisor(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }
}

findDivisor(N)
console.log(divisor[K-1] ?? 0);