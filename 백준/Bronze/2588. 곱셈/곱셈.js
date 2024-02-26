const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input.map(Number);
const [x, y, z] = input[1].split('').map(Number);

const answer = [];
answer[0] = a * z;
answer[1] = a * y;
answer[2] = a * x;
answer[3] = a * b;

console.log(answer.join('\n'));